import React from "react";
import PostItem from "../PostItem/PostItem";


const PostList =({posts, remove, editTodo})=>{
    return(
        <div>
        {posts.map((post, index) =>
        
        <PostItem editTodo={editTodo} remove={remove} number={index + 1} key={post.id} post={post}/>
        )}
        </div>
    )
}
export default PostList;