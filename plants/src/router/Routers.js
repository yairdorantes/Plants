import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Plants from "../components/Plants";
import PlantView from "../components/PlantView";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/plants" element={<Plants />}></Route>
      <Route path="/plant" element={<PlantView />}></Route>
    </Routes>
  );
};

export default Routers;
