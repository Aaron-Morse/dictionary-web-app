import { useState, useEffect } from "react";
import Header from "../src/componenets/header/Header";
import Search from "../src/componenets/search/Search";
import Main from "../src/componenets/main/Main";
import Footer from "../src/componenets/footer/Footer";
import NoDefinition from "../src/componenets/NoDefinition/NoDefinition";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
      {data !== undefined ? (
        <>
          <Main data={data} />
          <Footer data={data} />
        </>
      ) : (
        <NoDefinition />
      )}
    </div>
  );
}

export default App;
