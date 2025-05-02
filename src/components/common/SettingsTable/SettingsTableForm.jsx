import { Form, Field } from 'react-final-form'

const SettingsTableForm = ({onSubmit, onFieldChange, initialValues, tableName}) => {
    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render = { ({handleSubmit}) => (
                <form onSubmit={handleSubmit} className="container">
                    <p className="itemSize">Размер</p>
                    <p className="itemTitle">Категории</p>
                    <p className="itemTitleCategory1">1</p>
                    <p className="itemTitleCategory2">2</p>
                    <p className="itemTitleCategory3">3</p>
                    <p className="itemTitleCategory4">4</p>
                    {(tableName === 'settings_hail') 
                        ?
                        <p className="itemTitleBetween1">от 1 до 30</p> 
                        :
                        <p className="itemTitleBetween1">от 1 до 3 см</p>
                    }
                    {(tableName === 'settings_hail') 
                        ?
                        <p className="itemTitleBetween2">от 30 до 150</p> 
                        :
                        <p className="itemTitleBetween2">от 4 до 10 см</p>
                    }
                    {(tableName === 'settings_hail') 
                        ?
                        <p className="itemTitleBetween3">от 150 до 600</p> 
                        :
                        <p className="itemTitleBetween3">от 11 до 20 см</p>
                    }
                    {(tableName === 'settings_hail') 
                        ?
                        <p className="itemTitleBetween4">свыше 600</p> 
                        :
                        <p className="itemTitleBetween4">свыше 20 см</p>
                    }
                    {(tableName === 'settings_hail') 
                        ?
                        <p className="itemTitleBetween5">{"+> 600"}</p> 
                        :
                        <p className="itemTitleBetween5">{"+> 20"}</p>
                    }

                    <Field name="input11">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input11'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input11", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input12">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input12'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input12", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input13">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input13'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input13", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input14">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input14'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input14", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>

                    <Field name="input21">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input21'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input21", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input22">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input22'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input22", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input23">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input23'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input23", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input24">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input24'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input24", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>

                    <Field name="input31">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input31'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input31", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input32">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input32'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input32", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input33">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input33'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input33", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input34">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input34'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input34", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>

                    <Field name="input41">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input41'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input41", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input42">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input42'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input42", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input43">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input43'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input43", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input44">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input44'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input44", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input51">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input51'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input51", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input52">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input52'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input52", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input53">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input53'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input53", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                    <Field name="input54">
                        { ({input}) => (
                            <input 
                                {...input} 
                                type="text"  
                                className='input54'
                                autoCorrect='false' 
                                autoComplete='false'
                                onChange={(e) => {
                                    input.onChange(e)
                                    onFieldChange("input54", +(e.target.value))
                                }}
                                />
                        ) }
                    </Field>
                </form>
            ) }
        >
        </Form>
    )
}

export default SettingsTableForm