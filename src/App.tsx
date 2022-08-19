import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;