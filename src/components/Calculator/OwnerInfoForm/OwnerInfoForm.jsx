import { Form, Field } from 'react-final-form'
import HeadList from '../../common/HeadList'
import styles from './OwnerInfoForm.module.css'
import InputMask from "@mona-health/react-input-mask";

const OwnerInfoForm = ({onSubmit, isFirstButtonActivate, toggleActivateFirstButton, initialValues, onFieldChange}) => (
        <Form 
            onSubmit={onSubmit}
            initialValues={initialValues}
            render = { ({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={styles.wrapper}>
                        <div>
                            <HeadList name={'Информация о владельце и его авто'} toggleActivateButton={toggleActivateFirstButton} isButtonActivate={isFirstButtonActivate}/>
                            {isFirstButtonActivate &&
                                <div className={styles.ownerInfoForm}>
                                    <Field name="lastName">
                                        { ({input}) => (
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Фамилия' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("lastName", e.target.value)
                                                }}
                                                />
                                        ) }
                                    </Field>

                                    <Field name="firstName">
                                        { ({input}) => (
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Имя' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("firstName", e.target.value)
                                                }}
                                                />
                                        ) }
                                    </Field>

                                    <Field name="surname">
                                        { ({input}) => (
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Отчество' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("surname", e.target.value)
                                                }}
                                                />
                                        ) }
                                    </Field>

                                    <Field name="phonenumber">
                                        {({ input }) => (
                                        <InputMask
                                            {...input}
                                            mask="+7 (999) 999-99-99"
                                            maskChar="_"
                                            placeholder="+7 (___) ___-__-__"
                                            type="text"
                                            className={styles.ownerInfoFormItem}
                                            autoCorrect="false"
                                            autoComplete="false"
                                            onChange={(e) => {
                                            input.onChange(e); // Для react-final-form
                                            onFieldChange("phonenumber", e.target.value); // Ваш кастомный обработчик
                                            }}
                                        >
                                        </InputMask>
                                        )}
                                    </Field>

                                    <Field name="carModel">
                                        { ({input}) => (
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Авто' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("carModel", e.target.value)
                                                }}
                                                />
                                        ) }
                                    </Field>
                                
                                    <Field name="carNumber">
                                        { ({input}) => (
                                            <InputMask 
                                                {...input} 
                                                type="text" 
                                                mask="a999aa999" // Для российских номеров формата А 123 БВ 45
                                                maskChar={null}
                                                placeholder="А123БВ45"
                                                formatChars={{
                                                  'a': '[А-Яа-я]',
                                                  '9': '[0-9]'
                                                }}
                                                alwaysShowMask={true}
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("carNumber", e.target.value)
                                                }}
                                            ></InputMask>
                                        ) }
                                    </Field>
                                </div>
                            }
                        </div>
                </form>
            ) }
        >
        </Form>
)
    
export default OwnerInfoForm