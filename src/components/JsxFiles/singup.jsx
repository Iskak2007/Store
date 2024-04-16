import { Link } from 'react-router-dom'
import s from '../Styles/auth.module.css'
function Singup(){
    return(
        <>
            <div className={s.mega_block}>
                <div className={s.big_block}>
                    <h1>Создать аккаунт</h1>
                    <h2>Почта</h2>
                    <input required type='email'></input>
                    <h2>Пароль</h2>
                    <input required type='password'></input>
                    <button className={s.registration}>Зарегистрироваться</button>
                    <div>
                    <h2>Уже есть аккаунт?<Link to='/singin' className={s.link}>Войти</Link></h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singup