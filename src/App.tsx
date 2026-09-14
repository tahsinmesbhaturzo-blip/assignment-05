import type { TechnologiesType } from "./components/Type";
import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies";

const techFatch = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};


function App() {
  const [techPromise] = useState(() => techFatch())
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h3 className=" mb-4 pb-4 bg-linear-to-r text-4xl
             from-orange-500 via-pink-500
             to-purple-600 bg-clip-text text-transparent 
             flex justify-center">Technologies Loading...</h3>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
