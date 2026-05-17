import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import RouterApp from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer autoClose={3000} />
        <RouterApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
