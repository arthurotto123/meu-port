import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

import '../styles/Carousel.css';

const DEFAULT_ITEMS = [
  {
    title: 'Tudo-Carros',
    description: 'Este é um catálogo digital de veículos desenvolvidos em Node.js, Express, MongoDB e JavaScript no frontend .A aplicação permite cadastrar, consultar e visualizar informações desenvolvidas sobre carros de diferentes marcas, modelos e versões.',
    technologies: ['React ', 'Node.js ', 'MongoDB ', 'Express', 'CSS'],
    id: 1,
    icon: <FiFileText className="carousel-icon" />,
    image: '/imgsprojects/tudo-carros.png',
    link: 'https://tudo-carros.vercel.app/',
    repositoryLink: 'https://github.com/arthurotto123/Tudo-Carros'
  },
  {
    title: 'Landing Page: Plano de saúde',
    description: 'Smooth animations for your projects.',
    technologies: ['HTML ', 'CSS ', 'JavaScript ', 'React.js'],
    id: 2,
    icon: <FiCircle className="carousel-icon" />,
    image: '/imgsprojects/Plano-saude.png',
    link: 'https://segmedic.vercel.app/',
    repositoryLink: 'https://vercel.com/arthurotto123s-projects/segmedic'
  },
  {
    title: 'Previsão do tempo',
    description: 'Reusable components for your projects.',
    technologies: ['React', 'JavaScript', 'ApiRest','HTML','CSS'],
    id: 3,
    icon: <FiLayers className="carousel-icon" />,
    image: '/imgsprojects/prevtempo.png',
    link: 'https://prevtemp-6n27.vercel.app/',
    repositoryLink: 'https://github.com/arthurotto123/prevtemp'
  },
  {
    title: 'Beautiful Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    technologies: ['CSS', 'SVG', 'Generative Art'],
    id: 4,
    icon: <FiLayout className="carousel-icon" />,
    image: '/images/sample4.jpg',
    link: 'https://backgrounds.example.com',
    repositoryLink: 'https://github.com/your-repo/beautiful-backgrounds'
  },
  {
    title: 'Common UI Elements',
    description: 'Common UI components are coming soon!',
    technologies: ['Vanilla JS', 'Web Components'],
    id: 5,
    icon: <FiCode className="carousel-icon" />,
    image: '/images/sample5.jpg',
    link: 'https://ui-elements.example.com',
    repositoryLink: ''
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 100;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 10000,
  pauseOnHover = true,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: `${baseWidth}px`,
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? 'round' : ''}`}
              style={{
                width: itemWidth,
                height: 'auto',
              }}
              transition={effectiveTransition}
            >
              <div className="carousel-item-image-wrapper">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="carousel-item-main-image" />
                ) : (
                  <div className="carousel-image-placeholder">Imagem projeto</div>
                )}
              </div>
              <div className="carousel-item-content">
                <h3 className="project-title">{item.title}</h3>
                {item.technologies && item.technologies.length > 0 && (
                  <p className="project-technologies">
                    {item.technologies.join(', ')}
                  </p>
                )}
                <div className="project-buttons">
                  <a href={item.link} target="_blank" rel="noreferrer" className="project-button primary">
                    Acessar o projeto
                  </a>
                  {item.repositoryLink && (
                    <a href={item.repositoryLink} target="_blank" rel="noreferrer" className="project-button secondary">
                      Acessar repositório
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="carousel-indicators-container">
        <div className="carousel-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? 'active' : 'inactive'}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentIndex % items.length === index ? '#333' : '#ccc',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentIndex(index)}
              animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}