import { useNavigate } from "react-router-dom"
import { Nav } from "./styles"

const NavBar = () => {
    const navigate = useNavigate()

    return(
        <Nav>
            <div className="nav-container">
                <h2 className="nav-title">Kenzie Hub</h2>
                <button className="nav-logout" onClick={() => navigate("/login") & localStorage.clear()}>Sair</button>
            </div>
        </Nav>
    )
}
export default NavBar