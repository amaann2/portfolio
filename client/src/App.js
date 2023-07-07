import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import { useState, useEffect, useRef } from "react";
import SocialIcons from "./Components/Social-icons/SocialIcons";
import SplashScreen from "./Components/splash-screen/SplashScreen";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  const about = useRef(null);
  const project = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {showSplash ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <>
          <Navbar about={about} project={project} />
          <SocialIcons />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home about={about} project={project} />}
            />
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
