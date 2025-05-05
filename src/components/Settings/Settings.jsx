import HeadList from "../common/HeadList"
import SettingsTable from "../common/SettingsTable/SettingsTable"
import styles from './Settings.module.css'
import {useGetAllSettingsQuery} from '../../api/apiSlice'
import { useState } from "react"

let Settings  = () => {

    const [isFirstButtonActivate, setIsFirstButtonActivate] = useState(false)
    const [isSecondButtonActivate, setIsSecondButtonActivate] = useState(false)
    const [isThirdButtonActivate, setIsThirdButtonActivate] = useState(false)
    const [isFourthButtonActivate, setIsFourthButtonActivate] = useState(false)
    const [isFifthButtonActivate, setIsFifthButtonActivate] = useState(false)

    const {data, error, isLoading} = useGetAllSettingsQuery()

    return (
        <div className={styles.container}>
            <HeadList name='Стандартный ремонт:' isButtonActivate={isFirstButtonActivate} toggleActivateButton={() => {setIsFirstButtonActivate(!isFirstButtonActivate)}}/>
            {(isFirstButtonActivate && error) && (
                <p>Что-то пошло не так</p>
            )}
            {(isFirstButtonActivate && isLoading) && (
                <h1>Загрузка</h1>
            )}
            {(isFirstButtonActivate && data) && (
                <SettingsTable tableName={'settings_standart_repairs'} settingsData={data.standartRepairsSettings} />
            )}
                
            <HeadList name='Сложный ремонт:' isButtonActivate={isSecondButtonActivate} toggleActivateButton={() => {setIsSecondButtonActivate(!isSecondButtonActivate)}}/>
            <>
                {(isSecondButtonActivate && error) && (
                    <p>Что-то пошло не так</p>
                )}
                {(isSecondButtonActivate && isLoading) && (
                    <h1>Загрузка</h1>
                )}
                {(isSecondButtonActivate && data) && (
                    <SettingsTable tableName={'settings_hard_repairs'} settingsData={data.hardRepairsSettings} />
                )}
            </>
            <HeadList name='Крыша:' isButtonActivate={isThirdButtonActivate} toggleActivateButton={() => {setIsThirdButtonActivate(!isThirdButtonActivate)}}/>
            <>
                {(isThirdButtonActivate && error) && (
                    <p>Что-то пошло не так</p>
                )}
                {(isThirdButtonActivate && isLoading) && (
                    <h1>Загрузка</h1>
                )}
                {(isThirdButtonActivate && data) && (
                    <SettingsTable tableName={'settings_roof'} settingsData={data.roofSettings} />
                )}
            </>
            <HeadList name='Град:' isButtonActivate={isFourthButtonActivate} toggleActivateButton={() => {setIsFourthButtonActivate(!isFourthButtonActivate)}}/>
            <>
                {(isFourthButtonActivate && error) && (
                    <p>Что-то пошло не так</p>
                )}
                {(isFourthButtonActivate && isLoading) && (
                    <h1>Загрузка</h1>
                )}
                {(isFourthButtonActivate && data) && (
                    <SettingsTable tableName={'settings_hail'} settingsData={data.hailSettings} />
                )}
            </>
            <HeadList name='Доп. настройки:' isButtonActivate={isFifthButtonActivate} toggleActivateButton={() => {setIsFifthButtonActivate(!isFifthButtonActivate)}}/>

        </div>
    )
}

export default Settings