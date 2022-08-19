import { useContext } from "react";
import { UserContext } from "../../constexts/UserContext";
import Techs from "../Techs";
import { List, EmptyList } from "./styles";

const TechsList = () => {
  const { user } = useContext(UserContext);
  const { techs } = user;

  return (
    <>
      {techs.length > 0 ? (
        <List>
          {techs.map(({ id, title, status }) => (
            <Techs key={id} id={id} title={title} status={status} />
          ))}
        </List>
      ) : (
        <EmptyList>Lista de Tecnologias vazia!!</EmptyList>
      )}
    </>
  );
};
export default TechsList;