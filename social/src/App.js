import React from "react";
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Link, Routes, Route } from "react-router-dom"
import Post from "./Post";
import PostLayout from "./PostLayout";

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          {/* here insted of using anchor symbol we can use Link insted from the react Router */}
          <li><Link to= "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          {/* <li><Link to= "/newpost">New Post</Link></li> */}
          <li><Link to = "/postpage">Post Page</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        {/* <Route path="/newpost" element = {<NewPost/>} /> */}
        {/* nested route */}
        <Route path="/postpage" element = {<PostLayout/>}>
            <Route index element = {<PostPage/>}/>
            {/* here we can directly go through the next page */}
            <Route path=":id" element={<Post/>}/>
            {/* new post path -haed core */}
            <Route path="newpost" element = {<NewPost/>}/>
        </Route>
        {/* missing component defined due to if the user defined un defined path */}
        <Route path="*" element = {<Missing/>}/>
      </Routes>

      {/* 
      <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/>
       */}
    </div>
  );
}

export default App;
