import React from "react";
import PostItem from "../PostItem/PostItem";


const PostList =({posts, remove})=>{
    return(
        <div>
        <h1>список задач</h1>
        {posts.map((post, index) =>
        
        <PostItem remove={remove} number={index + 1} key={post.id} post={post}/>
        )}
        </div>
    )
}
export default PostList;