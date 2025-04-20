// import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'
import Navlink from './components/Navlink/Navlink'
import Header from './components/Header/Header'
import Archive from './components/Archive/Archive'
import Order from './components/Order/Order'
import Calculator from './components/Calculator/Calculator'
import Account from './components/Account/Account'
import Settings from './components/Settings/Settings'
import styles from './App.module.css'

function App() {
  // const isInitialized = useSelector(state => state.app.isInitialized)

  return (
    <BrowserRouter>
      <Header/>
      <div className={styles.appContentWrapper}>
        <Routes>
          <Route path="/archive" element={<Archive/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
      <div className={styles.footer}>
        <Navlink/>
      </div>
    </BrowserRouter>
  )
}

export default App
