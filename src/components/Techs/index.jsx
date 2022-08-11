import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechContext } from "../../constexts/TechContext";
import { Tech } from "./styles";

const Techs = ({ id, title, status }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <Tech>
      <p>{title}</p>
      <span>{status}</span>
      <button onClick={() => deleteTech(id)}>
        <FaRegTrashAlt />
      </button>
    </Tech>
  );
};
export default Techs;