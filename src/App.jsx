import "./App.css";
import BgVideo from "./components/BgVideo";
import Header from "./components/Header";
// import Landing from "./components/Landing";
import Footer from "./components/Footer";
// import Card from "./components/Card";
import SearchPage from "./components/SearchPage";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden ">
      <BgVideo />
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
export default App;
