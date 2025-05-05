import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import styles from './Archive.module.css'
import { useGetArchiveQuery } from "../../api/archiveSlice";
import Preloader from "../common/Preloader";

let Archive  = () => {

    const {data: allOrders, isLoading} = useGetArchiveQuery()
    const { filters, sort, pagination } = useSelector((state) => state.archive);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(allOrders)
    }, [allOrders])

    return (
        <>
            {isLoading && (
                <div className={styles.preloader}>
                    <Preloader/>
                </div>
            )}
            {allOrders && allOrders.length > 0 ? (
                <div>
                    {allOrders.map(el => (
                        <div>{el.details.map((det) => (
                            <div>{det.name}</div>
                        ))}</div>
                    ))}
                </div>
            ) :
            <div>Заказов нет</div>}
        </>
    )
}

export default Archive