import React from 'react'
import { useParams } from 'react-router-dom'
// here it is helps to specifies the particular id.

const Post = () => {
    // useparams which helps to specifies the particular id's in the list of routes {/:id}
    const {id} = useParams()
  return (
    <div><br />Post {id} </div>
  )
}  
export default Post