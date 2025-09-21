import Carousel from '../components/Carousel'
import '../styles/Projects.css'

function Projects(){
  return(
    <section id="ProjectsContainer">
      <h2>Projetos</h2>
      <div style={{ height: '700px', position: 'relative' }}>
  <Carousel
    baseWidth={1300}
    
    autoplay={true}
    autoplayDelay={10000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div>
<p>Arraste para o lado para ver mais projetos</p>
    </section>
  )
}

export default Projects;