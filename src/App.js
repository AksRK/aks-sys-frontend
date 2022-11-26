import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeBot from "./pages/bot-app/home";


function App() {
  return (
      // <BrowserRouter basename={'/aks-sys-frontend/'}>
      <BrowserRouter basename={'/aks-sys-frontend/'}>
          <Routes>
              <Route index element={<HomeBot/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
