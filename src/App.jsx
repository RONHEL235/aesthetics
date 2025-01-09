import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-900">
      <Navbar />
      <Hero />
      <Services />
    </main> 
  )
}

export default App