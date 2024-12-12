'use client';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Habilitar o deshabilitar el scroll basado en isLoading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'wait';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.cursor = 'default';
    }

    // Limpiar estilos al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.cursor = 'default';
    };
  }, [isLoading]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0); // Reiniciar la posición de scroll
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      {/* <SlidingImages />
      <Contact /> */}
    </main>
  );
}
