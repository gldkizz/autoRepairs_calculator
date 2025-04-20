import styles from './Navlink.module.css'
import { Package } from 'lucide-react';
import { BookA } from 'lucide-react';
import { Calculator } from 'lucide-react';
import { SquareUserRound } from 'lucide-react';
import { Settings } from 'lucide-react';
import { NavLink } from 'react-router';

let Navlink  = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <NavLink to="/archive">
                    <li className={styles.listItem}>
                            <div className={styles.logo}>
                                <Package/>
                            </div>
                        <p className={styles.text}>Архив</p>
                    </li>
                </NavLink>
                <NavLink to="/calculator">
                    <li className={styles.listItem}>
                        <div className={styles.logo}>
                            <Calculator/>
                        </div>
                        <p className={styles.text}>Калькулятор</p>
                    </li>
                </NavLink>
                <NavLink to="/account">
                    <li className={styles.listItem}>
                        <div className={styles.logo}>
                            <SquareUserRound/>
                        </div>
                        <p className={styles.text}>Аккаунт</p>
                    </li>
                </NavLink>
                <NavLink to="/settings">
                    <li className={styles.listItem}>
                        <div className={styles.logo}>
                            <Settings/>
                        </div>
                        <p className={styles.text}>Настройки</p>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navlink