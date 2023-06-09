import React, { useState } from "react";
import s from "./editing.module.css"
import { Link } from "react-router-dom";



const Editing = (props)=>{
    return(
        <div className={s.contener}> 
        <h1 className={s.h1}>редактирование</h1>
            <input onChange={e=>{props.setTitle(e.target.value)}} value={props.title} placeholder="заголовок:" className={s.input} type="text" />
            <div className={s.content}>
                <input onChange={e=>{props.setBody(e.target.value)}} value={props.body} placeholder="описание:" className={s.input2}  type="text" />
                <Link to={"/"}><button className={s.button}>отмена</button></Link>
                <Link to={'/'}>
                    <button onClick={()=>{ window.confirm('нажмите "Ок" если хотите отредактировать задачу') ?props.saveEdit(props.id)
                    : console.log('')}}  className={s.button2}>редактировать</button>
                </Link>
            </div>
        </div>
    )
}
export default Editing;
