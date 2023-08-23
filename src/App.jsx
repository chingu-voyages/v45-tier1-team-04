import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll relative">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
