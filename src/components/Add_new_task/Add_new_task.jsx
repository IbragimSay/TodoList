import React from "react";
import s from './add_new_task.module.css'
import { Link } from "react-router-dom";

const Add_new_task = (props)=>{
    return(
        <div className={s.contener}>
            <Link className={s.link} to="/add">
                <h3  className={s.button}><span className={s.button2}>+</span>добавить задачу</h3>
            </Link>
        </div>
    )
}
export default Add_new_task;