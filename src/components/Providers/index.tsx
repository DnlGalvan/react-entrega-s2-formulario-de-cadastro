import { ReactNode } from "react";
import { UserProvider } from "../../constexts/UserContext";
import { TechProvider } from "../../constexts/TechContext";

interface IProveidersProps {
  children: ReactNode
}

const Providers = ({ children }: IProveidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};
export default Providers;