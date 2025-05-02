import { Form, Field } from 'react-final-form'
import HeadList from '../../common/HeadList'
import styles from './ElementsForm.module.css'
import { useState } from 'react';

const ElementsForm = ({addNewElement, toggleActivateSecondButton, isSecondButtonActivate, tempState, onFieldChange,index}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    return (
        <Form 
            onSubmit={() => {
                setIsSubmitting(true)
                addNewElement(index)
            }}
            initialValues={tempState}
            render = { ({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={styles.wrapper}>
                        <div>
                            <HeadList name={tempState.name} toggleActivateButton={toggleActivateSecondButton} isButtonActivate={isSecondButtonActivate} index={index}/>
                            {isSecondButtonActivate &&
                                <div className={styles.calculatorWrapper}>
                                    <div
                                    onChange={(e) => {
                                        onFieldChange("name", e.target.value, index)
                                    }}
                                    >
                                        <label >
                                            <Field name='name' className={styles.select} component="select">
                                                <option value="">Выбрать элемент</option>
                                                <option value="Кузов">Кузов</option>
                                                <option value="Крыша">Крыша</option>
                                                <option value="Капот">Капот</option>
                                                <option value="Крыло-ПЛ">Крыло-ПЛ</option>
                                                <option value="Крыло-ПП">Крыло-ПП</option>
                                                <option value="Крыло-ЗЛ">Крыло-ЗЛ</option>
                                                <option value="Крыло-ЗП">Крыло-ЗП</option>
                                            </Field>
                                        </label>
                                    </div>
                                    <p className={styles.text}>Укажите категорию автомобиля:</p>
                                    <div className={styles.radioGroupCategory} onChange={(e) => {
                                        onFieldChange("category", e.target.value, index)
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
                                            <Field component='input' name='isAluminum' type='checkbox' 
                                            onClick={(e) => {
                                                onFieldChange("isAluminum", e.target.checked, index)
                                            }}
                                            />
                                            Аллюминий
                                        </label>
                                    </div>

                                    <p className={styles.text}>Определите вид-сложность работы:</p>
                                    <div className={styles.radioGroupTypeWork} onChange={(e) => {
                                        onFieldChange("typeOfWork", e.target.value, index)
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
                                                    onChange={(e) => {
                                                        input.onChange(e)
                                                        onFieldChange("size", e.target.value, index)
                                                    }}
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
                                                        input.onChange(e)
                                                        onFieldChange("buildTime", e.target.value, index)
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
                                        <button type='submit' disabled={isSubmitting} className={styles.button}>Добавить</button>
                                    </div>
                                </div>
                            }
                        </div>
                </form>
            ) }
        >
        </Form>
    )
}
    
export default ElementsForm