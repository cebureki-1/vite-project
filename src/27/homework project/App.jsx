import Header from './Header.jsx';
import NewPostForm from './NewPostForm.jsx';
import BlogPost from './BlogPost.jsx';
import Footer from './Footer.jsx';
import './Style.css';
import { useState } from 'react';

export default function App() {
    let [Blog, datas] = useState([{title:"efef"}])

    fun(datas, Blog);
    return (
        <div>
            
            <Header />
            <BlogPost fun="Like" />
            {Blog.map((post) => (
                            <h1>{post.title}</h1>
                        ))}
            <h1>{}</h1>
            <NewPostForm name="John Doe" bio="I am a web developer" />
            <Footer />
        </div>
    )
}setTimeout(() => {
    fun(datas, Blog);
function fun(data, Blog){
    
       const btn = document.querySelector("#btn")
    btn.addEventListener("click", ()=>{
        const title = document.getElementById('Title').value;
        const content = document.getElementById('Content').value;
        (data).textContent = "";
        (data)(prev => [...prev, {title: title, content: content}])
        console.log(Blog);
        
    })
   
    

} }, 1000);