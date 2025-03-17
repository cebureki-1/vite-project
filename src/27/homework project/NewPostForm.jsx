
export default function BlogPost({ title, content }) {
    function Like(event) {
                const title = document.getElementById('Title').value;
                const content = document.getElementById('Content').value;
                
                alert('Liked!');
            }
    return (
        <article className="article">
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    )
}
