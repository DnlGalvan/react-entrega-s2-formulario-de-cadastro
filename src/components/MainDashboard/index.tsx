import { useContext } from "react";
import { HiPlus } from "react-icons/hi";
import { TechContext } from "../../constexts/TechContext";
import TechsList from "../TechsList";
import { Main } from "./styles";

const MainDashboard = () => {
  const { setModal } = useContext(TechContext);

  return (
    <Main>
      <section className="dashboard-content">
        <div className="dashboard-infos">
          <h3 className="infos-title">Tecnologias</h3>
          <button className="infos-add-tech" onClick={() => setModal(true)}>
            <HiPlus />
          </button>
        </div>
        <TechsList />
      </section>
    </Main>
  );
};
export default MainDashboard;