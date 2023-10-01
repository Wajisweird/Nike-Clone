import "./App.css";
import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import First from "./Components/First";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Slogan from "./Components/Slogan";
import Last from "./Components/Last";
import Footer from "./Components/Footer";
import Shoes from "./Components/Shoes";
const Ad = React.lazy(() => import("./Components/Ad"));

export default function App() {
  return (
    <div>
      <>
        <Navbar />
        <Suspense fallback={<h6>LOADING</h6>}>
          <Ad />
        </Suspense>
        <br />
        <First />
        <Shoes />
        <Feature />
        <About />
        <Slogan />
        <Last />
        <Footer />
      </>
    </div>
  );
}
