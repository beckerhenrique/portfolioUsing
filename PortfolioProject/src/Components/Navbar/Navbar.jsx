
import './Navbar.css'
import ButtonsNavbar from '../ButtonsNavbar/ButtonsNavbar'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h4>Henrique Becker</h4>
      <section>
         <ButtonsNavbar title={"Home"}/>
         <ButtonsNavbar title={"About"}/>
         <ButtonsNavbar title={"Skills"}/>
         <ButtonsNavbar title={"Projects"}/>
      </section>
    </div>
  )
}
