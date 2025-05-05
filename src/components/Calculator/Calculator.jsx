import {useEffect, useState} from 'react'
import OwnerInfoForm from './OwnerInfoForm/OwnerInfoForm'
import styles from './Calculator.module.css'
import ElementsForm from './ElementsForm/ElementsForm'
import useDebounce from '../common/functionsSupabase/useDebounce'
import { useLazyGetSettingsQuery, useGetAdditionalSettingsQuery, useLazySaveCalculationQuery } from '../../api/apiSlice'
import interpolation from '../common/functionsSupabase/interpolation'

let Calculator  = () => {
    const [isFirstButtonActivate, setIsFirstButtonActivate] = useState(false)
    const [isSecondButtonActivate, setIsSecondButtonActivate] = useState([false])
    const [ownerInfoState, setOwnerInfoState] = useState({
        lastName: "",
        firstName: "",
        surname: "",
        phonenumber: "",
        carModel: "",
        carNumber: ""
    })
    const [temporaryElementInfo, setTemporaryElementInfo] = useState([
            {
                name: 'Добавить деталь',
                category: '0',
                typeOfWork: '0',
                isAluminum: false,
                size: '0',
                buildTime: '0',
                price: '0'
            }
        ]
    )
    const [settingState, setSettingsState] = useState(
        [
            {
                sizes: [],
                prices: [],
            }
        ]
    )

    const {data: additionalSettings} = useGetAdditionalSettingsQuery()
    const [fetchSettings,{data: settingData, error}] = useLazyGetSettingsQuery()
    const [fetchSaveCalc, {data: saveCalcData}] = useLazySaveCalculationQuery()

    let toggleActivateFirstButton = () => {
        setIsFirstButtonActivate(!isFirstButtonActivate)
    }

    let toggleActivateSecondButton = (index) => {
        setIsSecondButtonActivate((prev) => {
            let newArray = [...prev]
            newArray[index] = !prev[index]
            return newArray
        })
    }

    const debouncedOwnerStateUpdate = useDebounce(async (state) => {
        try {
            await setOwnerInfoState(state)
        } catch (err) {
            console.error("Update failed:", err)
        }
    }, 500)

    const debouncedCalculatorStateUpdate = useDebounce(async (state) => {
        try {
            await setTemporaryElementInfo(state)
        } catch (err) {
            console.error("Update failed:", err)
        }
    }, 500)

    let onOwnerFieldChange = (name, value) => {
        setOwnerInfoState(prev => {
            const newState = {...prev, [name]: value}
            debouncedOwnerStateUpdate(newState)
            return newState
        })
    }

    let onCalculatorFieldChange = (name, value, index) => {
        setTemporaryElementInfo(prev => {
            // Создаем копию массива
            const newArray = [...prev];
            // Создаем копию изменяемого элемента
            const updatedElement = { 
              ...newArray[index],
              [name]: value 
            };
            // Обновляем элемент в массиве
            newArray[index] = updatedElement;
            
            // Вызываем debounce для обновленного массива
            debouncedCalculatorStateUpdate(newArray);
            
            return newArray;
        })
    }

    const addNewElement = (index) => {
        let newTemporaryElementInfo = 
        {
            name: 'Добавить деталь',
            category: '0',
            typeOfWork: '0',
            isAluminum: false,
            size: '0',
            buildTime: '0',
            price: '0'
        }
        let newSettingState = 
        {
            sizes: [],
            prices: [],
        }
        setTemporaryElementInfo((prev) => {
            let newArray = [...prev]
            newArray.push(newTemporaryElementInfo)
            return newArray
        })
        setSettingsState((prev) => {
            let newArray = [...prev]
            newArray.push(newSettingState)
            return newArray
        })
        setIsSecondButtonActivate((prev) => {
            let newArray = [...prev]
            newArray.push(false)
            return newArray
        })
        toggleActivateSecondButton(index)
    }

    const onSubmit = () => {
        fetchSaveCalc({owner_data: ownerInfoState, elements_data:temporaryElementInfo.slice(0, -1)})
        setTemporaryElementInfo([
            {
                name: 'Добавить деталь',
                category: '0',
                typeOfWork: '0',
                isAluminum: false,
                size: '0',
                buildTime: '0',
                price: '0'
            }
        ])
        setSettingsState(
            [
                {
                    sizes: [],
                    prices: [],
                }
            ]
        )
        setOwnerInfoState(
            {
                lastName: "",
                firstName: "",
                surname: "",
                phonenumber: "",
                carModel: "",
                carNumber: ""
            }
        )
    }

    // TODO: рефакторинг (когда-нибудь :) Убираю все консоль лог, чтобы не мешало, посмотри сколько раз выводятся они (т. е. обновляется компонента)

    // TODO: Фетчинг данных по индексу нужен
    useEffect(() => {
        const timer = setTimeout(async () => {
        //   console.log('Актуальное состояние:', temporaryElementInfo);
          
          // Создаем массив промисов для всех запросов
          const fetchPromises = temporaryElementInfo.map(async (el, index) => {
            if (Number(el.category) !== 0 && Number(el.typeOfWork) !== 0) {
              try {
                // Выполняем запрос и ждем результат
                const result = await fetchSettings(el).unwrap();
                
                // Возвращаем данные для обновления состояния
                return {
                  index,
                  sizes: result.sizes,
                  prices: result.prices
                };
              } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
                return null;
              }
            }
            return null;
          });
      
          // Ожидаем завершения всех запросов
          const results = await Promise.all(fetchPromises);
          
          // Фильтруем успешные результаты и обновляем состояние
          const validResults = results.filter(Boolean);
          if (validResults.length > 0) {
            setSettingsState(prev => {
              const newArray = [...prev];
              validResults.forEach(({index, sizes, prices}) => {
                newArray[index] = {
                  ...newArray[index],
                  sizes,
                  prices
                };
              });
            //   console.log("Настройки:",newArray)
              return newArray;
            });
          }
        }, 500);
      
        return () => clearTimeout(timer);
      }, [temporaryElementInfo]);

    useEffect(() => {
        temporaryElementInfo.forEach((el, index) => {
            if(Number(el.size) !== 0) {
                let result = interpolation(settingData.sizes, settingData.prices, el.size)
                setTemporaryElementInfo((prev) => {
                    let newArray = [...prev]
                    const updatedElement = {
                        ...newArray[index],
                        price: result
                    }
                    newArray[index] = updatedElement
                    return newArray
                })
            }
            if(Number(temporaryElementInfo[index].buildTime) !== 0) {
                let categoryName = ''
                switch (temporaryElementInfo[index].category) {
                    case '1':
                        categoryName = 'first_category'
                        break;
                    case '2':
                        categoryName = 'second_category'
                        break;
                    case '3':
                        categoryName = 'third_category'
                        break;
                    case '4':
                        categoryName = 'fourth_category'
                        break;
                    default:
                        break;
                }
                setTemporaryElementInfo((prev) => {
                    let newArray = [...prev]
                    const updatedElement = {
                        ...newArray[index],
                        price: prev[index].price + (additionalSettings[0][categoryName] * Number(temporaryElementInfo[index].buildTime))     
                    }
                    newArray[index] = updatedElement
                    return newArray
                })
            }
            if(temporaryElementInfo[index].isAluminum) {
                setTemporaryElementInfo((prev) => {
                    let newArray = [...prev]
                    const updatedElement = {
                        ...newArray[index],
                        price: (prev[index].price * (100 + additionalSettings[0].aluminum)) / 100
                    }
                    newArray[index] = updatedElement
                    return newArray
                })
            }
        })

        // if(additionalSettings) {
        //     console.log("Доп. настройки", additionalSettings)
        // }
        
        if (error) {
            console.error('Ошибка при получении настроек:', error);
        }

    }, [settingData, error, additionalSettings]);

    return (
        <div className={styles.wrapper}>
            <OwnerInfoForm 
                toggleActivateFirstButton={toggleActivateFirstButton} 
                isFirstButtonActivate={isFirstButtonActivate}
                onSubmit={onSubmit} 
                initialValue={ownerInfoState}
                onFieldChange={onOwnerFieldChange}
            />
            {temporaryElementInfo.map((el,index) => (
                <ElementsForm
                    index={index}
                    key={index}
                    toggleActivateSecondButton={toggleActivateSecondButton} 
                    isSecondButtonActivate={isSecondButtonActivate[index]}
                    addNewElement={addNewElement} 
                    onSubmit={onSubmit}
                    onFieldChange={onCalculatorFieldChange}
                    tempState={el}
                    setTempState={ (updatedEl) => {
                        const updatedElements = [...temporaryElementInfo];
                        updatedElements[index] = updatedEl;
                        setTemporaryElementInfo(updatedElements);
                        }
                    }
                />
            ))}
            
            <div className={styles.buttonWrapper}>
                <button className={styles.button} type='submit' onClick={() => {
                    onSubmit()
                }}>Сохранить</button>
            </div>
        </div>
    )
}

export default Calculator