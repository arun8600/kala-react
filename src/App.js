
import Navbar from "./component/Navbar";
import Firstsection from "./Pages/Firstsection";
import Secondsection from "./Pages/Secondsection";
import Thirdsection from "./Pages/Thirdsection";
import Footer from "./component/Footer";
import Copyright from "./component/Copyright";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>

 
  

 <BrowserRouter>
 <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
         
        </Routes>
        <Footer/>
  <Copyright/>
      </BrowserRouter>
  </>
  );
}

export default App;
