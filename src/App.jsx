import "./App.css";
import Header from './components/Header';
import SellerPage from "./screens/SellerPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<SellerPage />} />
      </Routes>
    </>
  );
}

export default App;
