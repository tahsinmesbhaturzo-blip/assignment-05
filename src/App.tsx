import { useState,Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"

const TechnologiesFetch = async():Promise<Technologies[]> => {
  const res= await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {
   const [TechnologiesPromise] = useState(()=> TechnologiesFetch())
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h1>Loading the Technologies</h1>}>
      <Technologies TechnologiesPromise ={TechnologiesPromise}/>
      </Suspense>
      <Footer />
    </>
  )
}
export default App
