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
      <span>Arraste para conferir mais projetos</span>
    </section>
  )
}

export default Projects;