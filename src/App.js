import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeBot from "./pages/bot-app/home";
import CheckChats from "./pages/admin/check-chats";


function App() {
  return (
      <BrowserRouter basename={'/aks-sys-frontend/'}>
      {/*<BrowserRouter>*/}
          <Routes>
              {/*<Route path={'/bot'} element={<HomeBot/>} />*/}
              <Route index element={<HomeBot/>} />
              <Route path={'/admin/chats'} element={<CheckChats/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
