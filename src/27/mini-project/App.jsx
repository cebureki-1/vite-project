
import Header from './Header.jsx';
import AuthorDetails from './AuthorDetails.jsx';
import BlogPost from './BlogPost.jsx';
import Footer from './Footer.jsx';
import Navigation from './Navigation.jsx';

const posts = [
  {
      id: 1,
      title: 'My first post',
      content: 'This is my first blog post',
  },
  {
      id: 2,
      title: 'My second post',
      content: 'This is my second blog post',
  },
]
 
const author = {
  name: 'John Doe',
  bio: 'I am a web developer',
}

export default function App() {
  return (
    <>
            <Header />
            <Navigation/>
            {posts.map((post) => (
                <BlogPost key={post.id} title={post.title} content={post.content} />
            ))}
            <AuthorDetails name={author.name} bio={author.bio} />
            <Footer />
         
    </>
  )
}


