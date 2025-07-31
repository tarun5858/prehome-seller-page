import "./App.css";
import Header from './components/Header';
import SellerPage from "./screens/SellerPage";
import { Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/whatsappButton";

function App() {
  return (
    <>
      <Header></Header>
      <WhatsAppButton></WhatsAppButton>
      <Routes>
        <Route path="/" element={<SellerPage />} />
      </Routes>
    </>
  );
}

export default App;
