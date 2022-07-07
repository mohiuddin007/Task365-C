import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/postSlice';

export default function Posts() {
  const {isLoading, error, posts} = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  },[])
  
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Posts</h2>
        {isLoading && <h3>Loading...</h3> }
        {error && <h3>{error}</h3> }
        <section>
        {posts && posts.map((post) => {
          return <article key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </article>
        })}
        </section>
    </div>
  )
}
