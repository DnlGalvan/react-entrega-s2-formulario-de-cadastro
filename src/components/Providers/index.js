import { TechProvider } from "../../constexts/TechContext";
import { UserProvider } from "../../constexts/UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};
export default Providers;