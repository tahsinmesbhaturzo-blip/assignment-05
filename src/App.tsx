import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

// const TechnologiesFetch = async() => {
//   const res= await fetch('/data.json')
//   const data = await res.json()
//   return data
// }

function App() {
  // const TechnologiesPromise = TechnologiesFetch()
  return (
    <>
      <Nav />
      <Banner />
      <Footer />
      
    </>
  )
}

export default App
