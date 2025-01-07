import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
          <div className="pl-2">
            <a href="#">
              <img src={logo} width={150} height={15} alt="Aesthetics"></img>
            </a>
          </div> 
        </div>
    </nav>
  )
 className="border-b-2"


export default Navbar