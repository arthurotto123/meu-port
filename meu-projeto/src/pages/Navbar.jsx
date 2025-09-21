import PillNav from '../components/PillNav';
import logo from '../assets/logo.png';
import { href } from 'react-router-dom';

function Navbar() {
    return(
        <>
<PillNav
  logo={logo}
  logoAlt="Company Logo"
  items={[
    { label: 'Inicio', href: '/home' },
    { label: 'Sobre', href: '/about' },
    {label: 'Habilidades', href: '/skils'},
    { label: 'Projetos', href: '/projects' },
    { label: 'Contato', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
</>
    )

}

export default Navbar;
