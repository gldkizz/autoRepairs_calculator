import { Form, Field } from 'react-final-form'
import HeadList from '../../common/HeadList'
import styles from './ElementsForm.module.css'
import PickerField from './PickerField/PickerField'

const ElementsForm = ({onSubmit, toggleActivateSecondButton, isSecondButtonActivate, setTempState, tempState, price, onFieldChange}) => (
        <Form 
            onSubmit={onSubmit}
            initialValues={{price}}
            render = { ({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit} className={styles.wrapper}>
                        <div>
                            <HeadList name={'Добавить деталь'} toggleActivateButton={toggleActivateSecondButton} isButtonActivate={isSecondButtonActivate}/>
                            {isSecondButtonActivate &&
                                <div className={styles.calculatorWrapper}>
                                    <Field name='element' className={styles.select} component="select">
                                        <option value="">Выбрать элемент</option>
                                        <option value="Кузов">Кузов</option>
                                        <option value="Крыша">Крыша</option>
                                        <option value="Капот">Капот</option>
                                        <option value="Крыло-ПЛ">Крыло-ПЛ</option>
                                        <option value="Крыло-ПП">Крыло-ПП</option>
                                        <option value="Крыло-ЗЛ">Крыло-ЗЛ</option>
                                        <option value="Крыло-ЗП">Крыло-ЗП</option>
                                    </Field>
                                    <p className={styles.text}>Укажите категорию автомобиля:</p>
                                    <div className={styles.radioGroupCategory} onChange={(e) => {
                                        onFieldChange("category", e.target.value)
                                    }}>
                                        <label>
                                            <Field component='input' name='category' type='radio' value='1'/>
                                            Автомобили малого и низшего среднего класса
                                        </label>
                                        <label>
                                            <Field component='input' name='category' type='radio' value='2'/>
                                            Автомобили среднего класса
                                        </label>
                                        <label>
                                            <Field component='input' name='category' type='radio' value='3'/>
                                            Автомобили бизнес класса, внедорожники
                                        </label>
                                        <label>
                                            <Field component='input' name='category' type='radio' value='4'/>
                                            Автомобили представительского класса
                                        </label>
                                    </div>

                                    <div className={styles.radioGroupCategory}>
                                        <label>
                                            <Field component='input' name='isAlluminium' type='checkbox' value='true' 
                                            onClick={(e) => {
                                                // setTempState( prev => ({...prev, isAlluminium: !prev.isAlluminium}))
                                                onFieldChange("isAlluminium", e.target.checked)
                                            }}
                                            />
                                            Аллюминий
                                        </label>
                                    </div>

                                    <p className={styles.text}>Определите вид-сложность работы:</p>
                                    <div className={styles.radioGroupTypeWork} onChange={(e) => {
                                        // setTempState( prev => ({...prev, typeOfWork: e.target.value}))
                                        onFieldChange("typeOfWork", e.target.value)
                                    }}>
                                        <label>
                                            <Field component='input' name='typeOfWork' type='radio' value="1"/>
                                            Стандартный ремонт
                                        </label>
                                        <label>
                                            <Field component='input' name='typeOfWork' type='radio' value="2"/>
                                            Сложный ремонт
                                        </label>
                                        <label>
                                            <Field component='input' name='typeOfWork' type='radio' value="3"/>
                                            Крыша
                                        </label>
                                        <label>
                                            <Field component='input' name='typeOfWork' type='radio' value="4"/>
                                            Повреждения, полученные впоследствии града
                                        </label>
                                    </div>

                                    <p className={styles.text}>Добавочный уровень сложности:</p>

                                    <div className={styles.sizeWrapper}>
                                        <p className={styles.sizeText}>Размер вмятины:</p>
                                        <Field name="size">
                                            { ({input}) => (
                                                <input 
                                                    {...input} 
                                                    type="text"  
                                                    className={styles.sizeInput} 
                                                    autoCorrect='false' 
                                                    autoComplete='false'
                                                    />
                                            ) }
                                        </Field>
                                    </div>

                                    <div className={styles.buildTimeWrapper}>
                                        <p className={styles.buildTimeText}>Разборка / сборка:</p>
                                        <Field name="buildTime">
                                            { ({input}) => (
                                                <input 
                                                    {...input} 
                                                    type="text"  
                                                    className={styles.buildTimeInput} 
                                                    autoCorrect='false' 
                                                    autoComplete='false'
                                                    onChange={(e) => {
                                                        onFieldChange("buildTime", e.target.value)
                                                    }}
                                                    />
                                            ) }
                                        </Field>
                                    </div>

                                    <div className={styles.priceWrapper}>
                                        <p className={styles.priceText}>Стоимость:</p>
                                        <Field name="price">
                                            { ({input}) => (
                                                <input 
                                                    {...input} 
                                                    type="text"  
                                                    className={styles.priceInput} 
                                                    autoCorrect='false' 
                                                    autoComplete='false'
                                                    />
                                            ) }
                                        </Field>
                                    </div>

                                    <div className={styles.buttonWrapper}>
                                        <button type='submit' disabled={submitting} className={styles.button}>Добавить</button>
                                    </div>
                                </div>
                            }
                        </div>
                </form>
            ) }
        >
        </Form>
)
    
export default ElementsForm