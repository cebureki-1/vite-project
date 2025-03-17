

export default function BlogPost ({title , content})  {
    return(
        <article className="article">
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    )
}