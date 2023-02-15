import Image from 'next/image'
import styles from './page.module.css'

import Navbar from '@/components/Navbar'
import Gaspar from "../assets/jury1.png"
import Lars from "../assets/jury2.png"
import Wong from "../assets/jury3.png"
import Gus from "../assets/jury4.png"
import SocialNetLinks from '@/components/SocialNetLinks'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Navbar />
        <div className={styles.title}>
          <h1>New Idaho International Film Festival</h1>
          <p>5 - 21 May 2023</p>
          <p>Lincoln Centre</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.program} id="#program">
          <h2>Program</h2>
          <div className={styles.moviegrid}>
            <div className={styles.films} id={styles.film1}>
              <h3>Once Upon a Time in Hollywood</h3>
            </div>
            <div className={styles.films} id={styles.film2}>
              <h3>Joker</h3>
            </div>
            <div className={styles.films} id={styles.film3}>
              <h3>Parasites</h3>
            </div>
            <div className={styles.films} id={styles.film4}>
              <h3>Lighthouse</h3>
            </div>
          </div>
        </div>
        <div className={styles.jury}>
          <h2>Jury</h2>
          <div className={styles.jurygrid}>
              <div>
                <Image src={Gaspar} 
                          alt="Gaspar Noe"
                          width={160}
                          height={160} 
                />
                <h4>Gaspar Noe</h4> 
              </div>
              <div>
                <Image src={Lars} 
                          alt="Gaspar Noe"
                          width={160}
                          height={160} 
                />
                <h4>Lars Von Trier</h4> 
              </div>
              <div>
                <Image src={Wong} 
                          alt="Gaspar Noe"
                          width={160}
                          height={160} 
                />
                <h4>Wong Kar Wai</h4> 
              </div>
              <div>
                <Image src={Gus} 
                          alt="Gaspar Noe"
                          width={160}
                          height={160} 
                />
                <h4>Gus Van Sant</h4> 
              </div>
          </div>
        </div>

      </section>
      <footer className={styles.footer}>
          <section className={styles.info}>
             <h2>About</h2>
             <p>Film at Lincoln Center was founded in 1969 to celebrate cinema, to support new filmmakers, and to enhance awareness and understanding of film.</p>
             <p>Address: 70 Lincoln Center, New York, NY 10023, US</p>
          </section>
          <section className={styles.followUs}>
            <h2>Follow Us</h2>
            <SocialNetLinks />
          </section>
      </footer>
    </main>
  )
}
