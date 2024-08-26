import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PostLayout = () => {
  return (
    <>
        <Link to="/postpage/1">Post -1</Link>
        <br />
        <Link to="/postpage/2">Post -2</Link>
        <br />
        <Link to="/postpage/3">Post -3</Link>
        <br />
        <Link to="/postpage/4">Post -4</Link>
        <br />
        <Link to="/postpage/5">Post -5</Link>
        <br />
        <Link to= "/postpage/newpost">New Post</Link>
        <br />
        <Outlet />
    </>
  )
}

export default PostLayout