import s from '../Styles/admin.module.css'
function Admin(){
    return(
        <>
        <h1>Вы вошли как Админ</h1>
        <div className={s.block_box}>
            <div className={s.container}>
                <h2>Новые товары</h2>
            </div>
        </div>
        </>
    )
}
export default Admin