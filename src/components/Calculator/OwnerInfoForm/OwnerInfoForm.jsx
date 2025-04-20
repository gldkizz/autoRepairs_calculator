import { Form, Field } from 'react-final-form'
import HeadList from '../../common/HeadList'
import styles from './OwnerInfoForm.module.css'

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
                                        { ({input}) => (
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Телефон' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("phonenumber", e.target.value)
                                                }}
                                                />
                                        ) }
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
                                            <input 
                                                {...input} 
                                                type="text" 
                                                placeholder='Гос-номер' 
                                                className={styles.ownerInfoFormItem} 
                                                autoCorrect='false' 
                                                autoComplete='false'
                                                onChange={(e) => {
                                                    input.onChange(e)
                                                    onFieldChange("carNumber", e.target.value)
                                                }}
                                                />
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