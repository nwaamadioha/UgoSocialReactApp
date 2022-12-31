import "./leftBar.scss"
import Friends from "../../assets/1.png"




const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Friends</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar