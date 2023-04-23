import React from "react";
import s from './header.module.css'

const Header = ()=>{
    return(
        <div className={s.header}>
            <div className={s.content}>
                <img className={s.logo} src="/photo/to-do-list.png" alt="" />
                <p className={s.p}>ToDo</p>
            </div>
            
        </div>
    )
}
export default Header;