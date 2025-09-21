import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faNodeJs, faCss3, faReact, faGithub, faFigma, faPython, faGitAlt} from '@fortawesome/free-brands-svg-icons';
import '../styles/Skils.css'



function Skils() {
  return (
    <section id="SkilsContainer">
      <h2>Habilidades</h2>
      <div id="SkilsContent">
       <div className='faContent'>
     <FontAwesomeIcon className='icon' icon={faHtml5}  /> HTML5 
    </div>
    <div className='faContent'>
       <FontAwesomeIcon className='icon' icon={faJs}  /> JavaScript
    </div>
    <div className="faContent">
        <FontAwesomeIcon className='icon' icon={faNodeJs} /> Node.js 
    </div>
    <div className="faContent">
     <FontAwesomeIcon className='icon' icon={faCss3}  />  CSS3 
    </div>
    <div className="faContent">
      <FontAwesomeIcon className='icon' icon={faReact}  /> React.js 
    </div>
     <div className="faContent">
      <FontAwesomeIcon className='icon' icon={faGithub}  /> GitHub 
    </div>
     <div className="faContent">
      <FontAwesomeIcon className='icon' icon={faPython}  /> Python 
    </div>
     <div className="faContent">
      <FontAwesomeIcon className='icon' icon={faFigma}  /> Figma 
    </div>
     <div className="faContent">
      <FontAwesomeIcon className='icon' icon={faGitAlt}  /> GIT 
    </div>
    </div>
    </section>
  );
}

export default Skils;