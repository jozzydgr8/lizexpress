import {  Link, useNavigate } from "react-router-dom"
import FlatButton from "./FlatButton"

function Navbar() {
  const navigate = useNavigate();
  return (
  <>
  <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Liz express</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/lizexpress">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/lizexpress/browse">Browse</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/lizexpress/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <div >
          <FlatButton title="Sign in" onClick={()=>navigate('/lizexpress/user')}/>
            
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar