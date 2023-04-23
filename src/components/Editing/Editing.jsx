import React from "react";
import s from "./editing.module.css"
import { Link } from "react-router-dom";

const Editing = ()=>{
    return(
        <div className={s.contener}> 
        <h1 className={s.h1}>редактирование</h1>
            <input placeholder="заголовок:" className={s.input} type="text" />
            <div className={s.content}>
                <input placeholder="описание:" className={s.input2}  type="text" />
                <button className={s.button}>отмена</button>
                <Link to={'/'}>
                    <button className={s.button2}>редактировать</button>
                </Link>
            </div>
        </div>
    )
}
export default Editing;
