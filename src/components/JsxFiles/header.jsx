import { Link } from 'react-router-dom'
import s from '../Styles/shop02.module.css'
function Header(){
    return(
        <>
        <header>
            <div className={s.container}>
                <h1>IT-Academy</h1>
                <Link className={s.link} to={'/korzina'}>Корзина товаров</Link>
            </div>
        </header>
        </>
    )
}
export default Header