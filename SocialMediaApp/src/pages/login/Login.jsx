import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"


const Login = () => {

  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setErr] = useState(null)
  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs((prevValue) => ({
      ...prevValue,
      [name]: value,
    }))
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      setErr(error.response)
    }
  }
  console.log(err)

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>

        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={(e) => handleChange(e)}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login