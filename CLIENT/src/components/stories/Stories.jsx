import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id: 1,
            name: "James Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy="
        },
        {
            id: 2,
            name: "Johny Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy="
        },
        {
            id: 3,
            name: "Johan Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy="
        },
        {
            id: 4,
            name: "Joe Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy="
        },
    ]
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories