import { Link } from 'react-router-dom'
import s from '../Styles/auth.module.css'
function Singin(){
    return(
        <>
            <div className={s.mega_block}>
                <div className={s.big_block}>
                    <h1>Войти в аккаунт</h1>
                    <h2>Почта</h2>
                    <input required type='email'></input>
                    <h2>Пароль</h2>
                    <input required type='password'></input>
                    <button className={s.registration}>Войти</button>
                    <div>
                    <h2>Нету аккаунта?<Link to='/singin' className={s.link}>Зарегистрироваться</Link></h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singin