import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./components/HeaderView";
import HomeView from "./components/HomeView";
import LoginView from "./components/LoginView";
import ListView from "./components/ListView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/view/:id" element={<ListView />} />
        </Routes>
      </BrowserRouter>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
