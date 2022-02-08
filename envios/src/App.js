import "./App.css";
import LoginContent  from "./components/Login/Login";
import RegisterContent from "./components/Register/Register";
import DashboardContent from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <LoginContent/>
    <RegisterContent/>
    <DashboardContent/>
    </div>
  );
}

export default App;
