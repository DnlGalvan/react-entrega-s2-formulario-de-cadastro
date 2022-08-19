import { useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TechContext } from "../../constexts/TechContext";
import { IUserTechs } from "../../constexts/UserContext";
import { Tech } from "./styles";

const Techs = ({ id, title, status }: IUserTechs) => {
  const { setModalEdit, setTechId, setTechTitle, setTechStatus } = useContext(TechContext);

  function handleClick(id: string, title: string, status: string) {
    setModalEdit(true)
    setTechId(id)
    setTechTitle(title)
    setTechStatus(status)
  }

  return (
    <Tech>
      <p>{title}</p>
      <span>{status}</span>
      <button type="button"onClick={() => handleClick(id, title, status)}>
        <MdModeEditOutline />
      </button>
    </Tech>
  );
};
export default Techs;