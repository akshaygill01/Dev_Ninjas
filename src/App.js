import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";


import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss"
import "./styles/Contacts.scss"
import "./styles/mediaquery.scss"







function App() {
  return (
      <Router>
       <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/Contact"  element={<Contact/>}/>
          <Route path="/Services"  element={<Services/>}/>
        </Routes>
        <Footer/>
     

      </Router>
  );
}

export default App;
