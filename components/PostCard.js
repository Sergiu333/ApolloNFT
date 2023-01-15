export default function PostCard ({ post }){
  return (
    <div >
      <a href={post.uri} className="card">
        <h3>{post.title} &rarr;</h3>
      </a>
    </div>
  )
}
