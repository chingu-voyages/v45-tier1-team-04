import "./App.css";
import BgVideo from "./components/BgVideo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden ">
      <BgVideo />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
