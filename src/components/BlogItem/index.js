// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{publishedDate}</p>
    </div>
  )
}
export default BlogItem
