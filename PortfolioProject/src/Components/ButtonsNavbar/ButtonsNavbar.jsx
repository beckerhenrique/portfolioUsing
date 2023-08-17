
import "./ButtonsNavbar.css"

export default function ButtonsNavbar({title, anchor}) {
  return (
    <a href= {anchor} className='buttonsNavbar'>{title}</a>
  )
}
