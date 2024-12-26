import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "Empowering brands to shine bright in the digital space. Together we’ll shape the modern benchmark. No fluff, always ahead of the curve.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} id='description' className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My love for design, coding, and interaction places me in an unrivaled spot in the digital creative space.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <a href="/CV-art.pdf" target="_blank" className='link' download>
                            <p>View <br />Curriculum</p>
                        </a>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
