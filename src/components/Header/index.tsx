import { useContext } from "react"
import { UserContext } from "../../constexts/UserContext"
import { HeaderContainer } from "./styles"

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <HeaderContainer>
            <div className="header-div">
                <h1 className="header-title">{user.name}</h1>
                <span className="header-module">{user.course_module}</span>
            </div>
        </HeaderContainer>
    )
}
export default Header