

export default function AuthorDetails({name, bio}) {
    return (
        <div className="author-details">
            <h3>Author:{name}</h3>
            <p>{bio}</p>
        </div>
    )
}