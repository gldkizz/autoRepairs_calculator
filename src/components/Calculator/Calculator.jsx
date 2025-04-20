import {useState, useCallback, useRef} from 'react'
import OwnerInfoForm from './OwnerInfoForm/OwnerInfoForm'
import styles from './Calculator.module.css'
import ElementsForm from './ElementsForm/ElementsForm'
import { useLazyGetSettingsQuery } from '../../api/apiSlice'
import { supabase } from '../../supabaseSettings/supabaseClient'
import useDebounce from '../common/functionsSupabase/useDebounce'

let Calculator  = () => {
    const [isFirstButtonActivate, setIsFirstButtonActivate] = useState(false)
    const [isSecondButtonActivate, setIsSecondButtonActivate] = useState(false)
    const [selectedItems, setSelectedItems] = useState([''])
    const [ownerInfoState, setOwnerInfoState] = useState({
        lastName: "",
        firstName: "",
        surname: "",
        phonenumber: "",
        carModel: "",
        carNumber: ""
    })
    const [temporaryElementInfo, setTemporaryElementInfo] = useState({
        category: 0,
        typeOfWork: 0,
        isAlluminium: false,
        size: 0,
        buildTime: 0,
        price: 0
    })

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

    let onCalculatorFieldChange = (name, value) => {
        setTemporaryElementInfo(prev => {
            const newState = {...prev, [name]:value}
            debouncedCalculatorStateUpdate(newState)
            console.log(newState)
            return newState
        })
    }

    let toggleActivateFirstButton = () => {
        setIsFirstButtonActivate(!isFirstButtonActivate)
    }

    let toggleActivateSecondButton = () => {
        setIsSecondButtonActivate(!isSecondButtonActivate)
    }

    const onSubmit = (data) => {
        
    }

    return (
        <div className={styles.wrapper}>
            <OwnerInfoForm 
                toggleActivateFirstButton={toggleActivateFirstButton} 
                isFirstButtonActivate={isFirstButtonActivate}
                onSubmit={onSubmit} 
                initialValue={ownerInfoState}
                onFieldChange={onOwnerFieldChange}
            />
            <ElementsForm
                toggleActivateSecondButton={toggleActivateSecondButton} 
                isSecondButtonActivate={isSecondButtonActivate}
                onSubmit={onSubmit} 
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                onFieldChange={onCalculatorFieldChange}
                setTempState={setTemporaryElementInfo}
                tempState={temporaryElementInfo}
                price={temporaryElementInfo.price}
            />
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Сохранить</button>
            </div>
        </div>
    )
}

export default Calculator