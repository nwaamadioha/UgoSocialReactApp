import "./register.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  })
  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3000/api/auth/register", inputs)
    } catch (error) {
      setErr(error.response.data)
    }
  }

  console.log(err)
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Ugo Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={(e) => handleChange(e)}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register