import React, { useState } from "react";
import s from './post_item.module.css'
import { Link } from "react-router-dom";




const PostItem = (props)=>{

  let [active, setActive] = useState(true)

    return(
        <div>
                <div  className={s.posts}>
                <div className={s.title_big}>
                  <div className={s.title}> <h3 className='index_title'>{props.number}.</h3> <h3 className={active ?s.text_title :s.text_title2}>{props.post.title}</h3></div>
                  <div className={active ?s.body :s.body2}>{props.post.body}</div>
                </div>
                <div className={s.buttons}>
                  <Link to={"/Editing"}>
                    <button onClick={()=>props.editTodo(props.post.title, props.post.body, props.post.id)} className={s.button_corect}>редактировать</button>
                  </Link>
                  <button onClick={() =>{ window.confirm('вы хотите Удалить эту задачу') ?
                    props.remove(props.post) : console.log('dkklsjd')
                  }} className={s.button_remove}>удалить</button>
                  <input onClick={()=>{ setActive(!active ) 
                  console.log(active)}}   className={s.checkbox} type='checkbox'/>
                </div>

              </div>  
        </div>
    )
}
export default PostItem;