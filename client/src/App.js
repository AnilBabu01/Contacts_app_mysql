import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AddEdit from "./pages/AddEdit";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ToastContainer position="top-center" />
           <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/addContact"  element={<AddEdit/>}/>
           </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
