import React, { useState } from "react";
import s from "./input_for_add_post.module.css"



const Input_for_add_post = ({create})=>{

    const [post, setPost] = useState({title: '', body: ''})

    const add_newPost = (e)=>{
        e.preventDefault()
        if(post.body, post.title !== ''){

            const newPost = {
               ...post, id: Date.now()
            }
            create(newPost)
        }
        setPost({title: '', body: ''}) 
      }


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    return(
        <div className={s.contener}>
            <input onChange={e =>{
                setPost({...post, title: e.target.value})
            }} value={post.title} placeholder="заголовок:" className={s.input} type="text" />
            <div className={s.content}>
                <input onChange={e =>{
                setPost({...post, body: e.target.value})
            }}  value={post.body} placeholder="описание:" className={s.input2} type="text" />
                <button onClick={add_newPost}  className={s.button_add}>добавить</button>
            </div>

        </div>
    )
}
export default Input_for_add_post;