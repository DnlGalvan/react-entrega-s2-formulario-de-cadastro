import { HeaderContainer } from "./styles"

const Header = ({ user }) => {
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