import React from "react";
import s from './post_item.module.css'
import { Link } from "react-router-dom";

const PostItem = (props)=>{
    return(
        <div>
                <div  className={s.posts}>
                <div className={s.title_big}>
                  <div className={s.title}> <h3 className='index_title'>{props.number}.</h3> <h3 className='text_title'>{props.post.title}</h3></div>
                  <div className={s.body}>{props.post.body}</div>
                </div>
                <div className={s.buttons}>
                  <Link to={"/Editing"}>
                    <button className={s.button_corect}>редактировать</button>
                  </Link>
                  <button onClick={() =>{
                    props.remove(props.post)
                  }} className={s.button_remove}>удалить</button>
                  <input className={s.checkbox} type='checkbox'/>
                </div>

              </div>  
        </div>
    )
}
export default PostItem;