import styled from "styled-components"
import { Form, Field } from 'react-final-form'
import SettingsTableForm from "./SettingsTableForm"
import { useCallback, useRef, useState } from "react"
import { useUpdateSettingsMutation } from "../../../api/apiSlice"

function useDebounce(callback, delay) {
    const timeoutRef = useRef(null)

    return useCallback((...args) => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
}

let SettingsTable = ({tableName, settingsData}) => {

    const [updateSettings] = useUpdateSettingsMutation()

    const [formState, setFormState] = useState({
        input11: settingsData[0].first_category || {},
        input12: settingsData[0].second_category || {},
        input13: settingsData[0].third_category || {},
        input14: settingsData[0].fourth_category || {},

        input21: settingsData[1].first_category || {},
        input22: settingsData[1].second_category || {},
        input23: settingsData[1].third_category || {},
        input24: settingsData[1].fourth_category || {},

        input31: settingsData[2].first_category || {},
        input32: settingsData[2].second_category || {},
        input33: settingsData[2].third_category || {},
        input34: settingsData[2].fourth_category || {},

        input41: settingsData[3].first_category || {},
        input42: settingsData[3].second_category || {},
        input43: settingsData[3].third_category || {},
        input44: settingsData[3].fourth_category || {},

        input51: settingsData[4].first_category || {},
        input52: settingsData[4].second_category || {},
        input53: settingsData[4].third_category || {},
        input54: settingsData[4].fourth_category || {}
    })

    const debouncedUpdate = useDebounce(async (tableName, formState) => {
        try {
            await updateSettings({tableName, formState}).unwrap()
        } catch (err) {
            console.error("Update failed:", err)
        }
    }, 500)

    let onFieldChange = (name, value) => {
        setFormState(prev => {
            const newState = {...prev, [name]: value}
            debouncedUpdate(tableName, newState)
            return newState
        })
    }

    let onSubmit = (values) => {
        setFormState(values)
    }
    return (
        <StyledWrapper>
            <SettingsTableForm 
                settingsData={settingsData} 
                onSubmit={onSubmit} 
                initialValues={formState}
                onFieldChange={onFieldChange}
            />
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content: start;
        align-items: center;
        justify-items: stretch;
        row-gap: 10px;
        margin-top: 10px;
        background-color: #343434;
        padding: 10px 5px;
        border-radius: 15px
    }

    .itemSize {
        grid-area: 1 / 1 / 2 / 2;
        font-size: 12px;
        font-weight: bold;
        justify-self: center;
    }

    .itemTitle {
        grid-area: 1 / 2 / 2 / 3;
        grid-column-start: 2;
        grid-column-end: 6;
        justify-self: center;
        font-size: 12px;
        font-weight: bold;
    }

    .itemTitleCategory1 {
        grid-area: 2 / 2 / 3 / 3;
        font-size: 11px;
        font-weight: bold;
        justify-self: center;
    }

    .itemTitleCategory2 {
        grid-area: 2 / 3 / 3 / 4;
        font-size: 11px;
        font-weight: bold;
        justify-self: center;
    }

    .itemTitleCategory3 {
        grid-area: 2 / 4 / 3 / 5;
        font-size: 11px;
        font-weight: bold;
        justify-self: center;
    }

    .itemTitleCategory4 {
        grid-area: 2 / 5 / 3 / 6;
        font-size: 11px;
        font-weight: bold;
        justify-self: center;
    }

    .itemTitleBetween1 {
        grid-area: 3 / 1 / 4 / 2;
        font-size: 10px;

    }

    .itemTitleBetween2 {
        grid-area: 4 / 1 / 5 / 2;
        font-size: 10px;
    }

    .itemTitleBetween3 {
        grid-area: 5 / 1 / 6 / 2;
        font-size: 10px;
    }

    .itemTitleBetween4 {
        grid-area: 6 / 1 / 7 / 2;
        font-size: 10px;
    }

    .itemTitleBetween5 {
        grid-area: 7 / 1 / 8 / 2;
        font-size: 10px;
    }

    .input11 {
        grid-area: 3 / 2 / 4 / 3;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input12 {
        grid-area: 3 / 3 / 4 / 4;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input13 {
        grid-area: 3 / 4 / 4 / 5;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input14 {
        grid-area: 3 / 5 / 4 / 6;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }

    .input21 {
        grid-area: 4 / 2 / 5 / 3;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input22 {
        grid-area: 4 / 3 / 5 / 4;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input23 {
        grid-area: 4 / 4 / 5 / 5;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input24 {
        grid-area: 4 / 5 / 5 / 6;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }

    .input31 {
        grid-area: 5 / 2 / 6 / 3;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input32 {
        grid-area: 5 / 3 / 6 / 4;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input33 {
        grid-area: 5 / 4 / 6 / 5;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input34 {
        grid-area: 5 / 5 / 6 / 6;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }

    .input41 {
        grid-area: 6 / 2 / 7 / 3;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input42 {
        grid-area: 6 / 3 / 7 / 4;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input43 {
        grid-area: 6 / 4 / 7 / 5;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input44 {
        grid-area: 6 / 5 / 7 / 6;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }

    .input51 {
        grid-area: 7 / 2 / 8 / 3;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input52 {
        grid-area: 7 / 3 / 8 / 4;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input53 {
        grid-area: 7 / 4 / 8 / 5;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
    .input54 {
        grid-area: 7 / 5 / 8 / 6;
        font-size: 11px;
        border-bottom: 1px solid #E9E9E9;
        max-width: 50px;
        text-align: center;
        justify-self: center;
    }
`

export default SettingsTable