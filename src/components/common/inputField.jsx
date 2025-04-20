import { useField } from 'react-final-form'

let inputField = ({name, placeholder, ...rest}) => {
    const {
        input,
        meta: {submitting }
      } = useField(name, {
        type: 'text', // тип поля по умолчанию
        ...rest
      });
    return (
        <input {...input} id={name} placeholder={placeholder} disabled={submitting}/>
    )
}

export default inputField