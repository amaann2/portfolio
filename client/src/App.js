import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
import SocialIcons from "./Components/Social-icons/SocialIcons";
import SplashScreen from "./Components/splash-screen/SplashScreen";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
function App() {
  const [showSplash, setShowSplash] = useState(true);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

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
          <Navbar about={about} project={project} contact={contact} />
          <SocialIcons />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home about={about} project={project} contact={contact} />
              }
            />
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
