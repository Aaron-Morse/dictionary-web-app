import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import NoDefinition from "./components/noDefinition/NoDefinition";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("inter");
  const [data, setData] = useState(null);

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
