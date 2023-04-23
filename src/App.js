import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import PostItem from './components/PostItem/PostItem';
import Add_new_task from './components/Add_new_task/Add_new_task';
import Input_for_add_post from "./components/Input_for_add_post/Input_for_add_post"

import { Route, Routes } from 'react-router-dom';
import Editing from './components/Editing/Editing';
import s from "./components/Input_for_add_post/input_for_add_post.module.css"
import PostList from './components/PostList/PostList';

function App() {
  const [posts, setPosts ] = useState ( JSON.parse(localStorage.getItem("blogPosts")) ||  [

  ]) 
  localStorage.setItem("blogPosts", JSON.stringify(posts))

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const [title, setTitle]=useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState('')

  function editTodo(ttitle, bbody, id){
    setId(id)
    setTitle(ttitle)
    setBody(bbody)
  }
  function saveEdit (id){
    let newTodo = [...posts].map(item =>{
      if (item.id == id){
        item.title =  title
        item.body = body }
    })
    
    setTitle('')
    setBody('')
    console.log(id)
  }
  
 
  const removePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }




  return (
    <div className="App">
      <Header posts={posts} />
      <Add_new_task  />
      <Routes>
        <Route path='/add' element={  <Input_for_add_post  create={createPost} />} />
        <Route path='/Editing' element={  <Editing id={id} saveEdit={saveEdit} title={title} setTitle={setTitle} body={body} setBody={setBody}   />} />
      </Routes>

      
      
      {posts.length !== 0
      ?     <PostList editTodo={editTodo} remove={removePost} posts={posts}/>
      : <h2 className='notTodo'>нет задач</h2>
      }


    
  
    </div>
  );
}

export default App;
