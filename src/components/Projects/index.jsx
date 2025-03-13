'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import './index.css'

const projects = [
  {
    title: "Makata Studio",
    src: "MakataStudio.png",
    color: "#706D63",
    link: "https://makata.tv/"
  },
  {
    title: "Ayrton Senna",
    src: "Senna.png",
    color: "#8C8C8C",
    link: "https://ayrton-senna-three.vercel.app/"
  },
  {
    title: "Simple Post",
    src: "simplePostRefact.png",
    color: "#706D63",
    link: "https://davidgarciamunozz.github.io/SimplePost-DCA-FP/public/"
  },
  {
    title: "Blessd Web",
    src: "Blessd.png",
    color: "#8C8C8C",
    link: "https://davidgarciamunozz.github.io/Blessd-Web/"
  },
  {
    title: "Fesamed Care",
    src: "FMed.png",
    color: "#706D63",
    link: "https://fesamedcare.netlify.app/"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {
  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    if (window.innerWidth > 768) {
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
    }
  }, [])

  const moveItems = (x, y) => {
    if (window.innerWidth > 768) {
      xMoveContainer.current(x)
      yMoveContainer.current(y)
      xMoveCursor.current(x)
      yMoveCursor.current(y)
      xMoveCursorLabel.current(x)
      yMoveCursorLabel.current(y)
    }
  }

  const manageModal = (active, index, x, y) => {
    if (window.innerWidth > 768) {
      moveItems(x, y)
    }
    setModal({active, index})
  }

  const handleClick = () => {
    // if (projects[index]?.link) {
    //   window.open(projects[index].link, '_blank');
    // }
    console.log('click')
  }

  return (
  <main
    id='work'
    onMouseMove={(e) => window.innerWidth > 768 ? moveItems(e.clientX, e.clientY) : null} 
    className={styles.projects}
  >
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project
            index={index} 
            title={project.title} 
            link={project.link}
            manageModal={manageModal} 
            key={index}
          />
        })
      }
    </div>
    <Rounded>
      <a href="https://github.com/davidgarciamunozz" id='github'>
      <p>GitHub</p>
      </a>
    </Rounded>
    <>
        <motion.div
          ref={modalContainer} 
          variants={scaleAnimation} 
          initial="initial" 
          animate={active ? "enter" : "closed"} 
          className={styles.modalContainer}
        >
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div 
                  className={styles.modal} 
                  style={{backgroundColor: color}} 
                  key={`modal_${index}`}
                >
                    <Image 
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt={`${project.title} project image`}
                      style={{maxWidth: '100%', height: 'auto'}}
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div 
          ref={cursor} 
          className={styles.cursor} 
          variants={scaleAnimation} 
          initial="initial" 
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          style={{ cursor: 'pointer' }}
        >
          View
        </motion.div>
    </>
  </main>
  )
}