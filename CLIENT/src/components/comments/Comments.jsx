import { useContext } from "react";
import "./comments.scss"
import { AuthContext } from "../../context/authContext";


const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    //TEMPORARY
    const comments = [
        {
            id: 1,
            name: "James Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "I totally fucks with what you just said. Thanks for speaking out",
        },
        {
            id: 2,
            name: "Jonathan Steven",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Those are some powerful words you put out there",
        },
    ];

    return (
        <div className="comments">
            <div className="writeComment">
              <img src={currentUser.profilePic}/>
              <input type="text" placeholder="Write a comment" />
              <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments