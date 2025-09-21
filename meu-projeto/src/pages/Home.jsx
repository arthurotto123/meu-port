import '../styles/Home.css'
import SplitText from '../components/SplitText';
import ElectricBorder from '../components/ElectriBorder'
import fundoImg from '../assets/perfil2.jpg';
import AnimatedContent from '../components/AnimatedContent'



const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



function Home() {
  return (
    <section id="HomeContainer">
      <div id="HomeContentLeft">

        <p>Olá, eu sou</p>
        <h3>Arthur Coelho</h3>
        <SplitText
          text="Desenvolvedor Front-End"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <button>
          <a href="/CURRÍCULO - ARTHUR COELHO.pdf" download>Baixar Curriculo</a>
        </button>



      </div>
      <div id="HomeContentRigth">
        <AnimatedContent
          distance={1000}
          direction="horizontal"
          reverse={false}
          duration={3}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <div><ElectricBorder

          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{
            borderRadius: 500,
            backgroundImage: `url(${fundoImg})`
          }}
        >

        </ElectricBorder></div>
        </AnimatedContent>
        

      </div>

    </section>
  )
}

export default Home;