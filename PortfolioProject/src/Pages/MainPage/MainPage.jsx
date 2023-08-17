
import './MainPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import myPicture from '../../../public/myPicture.png'


function MainPage() {
  return (
    <>
    <Navbar/>
    <div className='Page'>
      <section className='Section Home'>
        <section className='CardProfile'>
          <img src={myPicture} alt="My Picture" />
          <h2 className='NameHome'>Henrique Becker</h2>
          <section className='rolesHome'>
          <p>Quality Assurance Developer</p>
          <p>Web Developer</p>
          </section>
          <section className='ContactsHome'>Contacts</section>
        </section>
      </section>
      <section className='Section About'></section>
      <section className='Section Skills'></section>
      <section className='Section Projects'></section>
    </div>
    </>
  )
}

export default MainPage