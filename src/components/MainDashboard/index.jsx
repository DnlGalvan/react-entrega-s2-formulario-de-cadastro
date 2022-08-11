import { Main } from "./styles";
import { HiPlus } from "react-icons/hi";
import TechsList from "../TechsList";
import { useContext } from "react";
import { TechContext } from "../../constexts/TechContext";

const MainDashboard = () => {
  const { addTech } = useContext(TechContext);

  return (
    <Main>
      <section className="dashboard-content">
        <div className="dashboard-infos">
          <h3 className="infos-title">Tecnologias</h3>
          <button
            className="infos-add-tech"
            onClick={() => addTech({
              "title": "Teste4",
              "status": "Avançado",
            })}
          >
            <HiPlus />
          </button>
        </div>
        <TechsList />
      </section>
    </Main>
  );
};
export default MainDashboard;