export default function BlogPost(props) {
    function Good(event) {
        event.preventDefault();
    }
    return (
           <div className="blog-post">
                <form id="form" onSubmit={Good}>    
                <input type="text" id="Title" placeholder="Title" />
                <input type="text" id="Content" placeholder="Content" />
                <button type="submit" id="btn">Repository</button>
            </form>
            </div>
    )
    
}

        