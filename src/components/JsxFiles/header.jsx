import { Link } from 'react-router-dom'
import s from '../Styles/shop02.module.css'
function Header(){
    return(
        <>
        <header>
            <div className={s.container}>
                <h1>IT-Academy</h1>
                
            </div>
            <div className={s.otherCon}>
                    <Link className={s.link} to={'/korzina'}>Корзина товаров</Link>
                    <button className={s.login}>Войти</button>
                    <img className={s.profile} src="./src/assets/image 9.png" alt="" />
                </div>
        </header>
        </>
    )
}
export default Header