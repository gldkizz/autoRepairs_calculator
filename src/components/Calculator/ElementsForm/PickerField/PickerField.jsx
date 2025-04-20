import React from 'react';
import styles from './PickerField.module.css'
import { Form, Field } from 'react-final-form';

const PickerField = ({onSubmit}) => (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={styles.formWrapper}>
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
            </form>
            )}
        />
)

export default PickerField