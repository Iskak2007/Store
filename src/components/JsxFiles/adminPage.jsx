import s from '../Styles/admin.module.css'
function Admin(){
    return(
        <>
        <h1>Вы вошли как Админ</h1>
        <div className={s.block_box}>
            <div className={s.container}>
                <h2 className={s.newprod}>Новые товары</h2>
                <div className={s.wall}>
                    <div className={s.title}>
                    <h2 className={s.product}>Наушники logitech g435</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Мышка logitech</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Духи  Jean Paul Gaultier Le Male</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Обувь Salomon XT-6 Cradle Pink Alloy Yucca</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Очки Apple Vision Pro</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Телефон Iphone 15 Pro</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                    <div className={s.title}>
                    <h2 className={s.product}>Очки Meta Quest 3</h2>
                    <img className={s.trash} src="./src/assets/image 1.png" alt="" />
                    </div>
                </div>
                <button>
                    Добавить товар
                </button>
            </div> 
        </div>
        </>
    )
}
export default Admin