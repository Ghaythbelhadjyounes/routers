import "./App.css";
import Navnavv from "./Components/Navnavv";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Detail from "./Components/Detail";
import { Button } from "react-bootstrap";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/City" element={<Navnavv />} />
          <Route path="*" element={<Error />} />
          <Route path="/City/:id" element={<Detail />} />
        </Routes>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => navigate(-1)}>Previous</Button>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate(1)} style={{ width: "92px" }}>
          Next
        </Button>
      </div>
    </>
  );
}

export default App;
