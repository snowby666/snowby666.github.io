import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Software</h1>
          <h1>Engineer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Ngo Dinh Gia Bao</h1>
            <h6 className={styles.bio}>Full Stack Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='HTML/CSS' className='HTML/CSS'>
                      HTML/CSS
                    </span>
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='JavaScript/TypeScript' className='JavaScript/TypeScript'>
                      JavaScript/TypeScript
                    </span>
                    <span key='Heroku' className='Heroku'>
                      Heroku
                    </span>
                    <span key='MySQL' className='MySQL'>
                      MySQL
                    </span>
                    <span key='PostgreSQL' className='PostgreSQL'>
                      PostgreSQL
                    </span>
                    <span key='GraphQL' className='GraphQL'>
                      GraphQL
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      Data-Pipelines
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Design
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.png"
                width={300}
                height={290}
                alt="Bao' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
