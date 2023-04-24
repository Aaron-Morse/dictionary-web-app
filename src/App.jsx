import { useState, useEffect } from "react";
import Header from "../src/componenets/header/Header";
import Search from "../src/componenets/search/Search";
import Main from "../src/componenets/main/Main";
import Footer from "../src/componenets/footer/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  return (
    <div className="App" style={{ fontFamily: font }}>
      <Header
        font={font}
        setFont={setFont}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Search setData={setData} />
      <Main data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
