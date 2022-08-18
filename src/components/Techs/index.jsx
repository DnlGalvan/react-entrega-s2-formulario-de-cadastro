import { useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { TechContext } from "../../constexts/TechContext";
import { Tech } from "./styles";

const Techs = ({ id, title, status }) => {
  const { setModalEdit, setTechId, setTechTitle, setTechStatus } = useContext(TechContext);

  function handleClick(id, title, status) {
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