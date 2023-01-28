import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "James Doe",
      userId:1,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I am not worrying about things outside my control",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "James Johathan",
      userId:2,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I am not worrying about my pasts. I am not worrying about the future",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Matt Johnson",
      userId:3,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I am focused on making today count cos that's all that matters",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Bruce Clinton",
      userId:4,
      profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Nothing scares me, nothing breaks me, I am unstopable",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

  ]
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts