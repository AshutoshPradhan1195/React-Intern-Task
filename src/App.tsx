import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import CustomerProfile from "./components/pages/customerProfiles";
import AddCustomer from "./components/pages/addCustomer";
import EditCustomer from "./components/pages/editCustomer";
import { useState } from "react";
import { ThemeContext } from "./components/themeProvider";

function App() {
  const[lightTheme, setLightTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/customerProfiles" element={<CustomerProfile/>}/>
          <Route path="/customerProfiles/create" element={<AddCustomer/>}/>
          <Route path="/customerProfiles/edit" element={<EditCustomer/>}/>

        </Routes>
      </Router>
    </ThemeContext.Provider>
    
  );
}

export default App;
