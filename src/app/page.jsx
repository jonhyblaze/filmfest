import Image from 'next/image'
import styles from './page.module.css'
import Email from "../assets/logo_mail.svg"
import Facebook from "../assets/logo_facebook.svg"
import Instagram from "../assets/logo_instagram.svg"
import Twitter from "../assets/logo_twitter.svg"
import Logo from "../assets/logo.svg"



export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <header className={styles.header}>
          <Image src={Logo} alt="Logo" width={218} height={94} className={styles.logo}/>
          <ul className={styles.nav}>
            <li className={styles.navItem}>Program</li>
            <li className={styles.navItem}>Jury</li>
            <li className={styles.navItem}>Submit</li>
          </ul>
        </header>
        <div className={styles.title}><h1>New Idaho International Film Festival</h1></div>
      </section>
      <footer className={styles.footer}>
          <ul className={styles.links}>
            <Image src={Twitter} alt="Twitter icon" />
            <Image src={Facebook} alt="Facebook icon" />
            <Image src={Instagram} alt="Instagram icon" />
            <Image src={Email} alt="Email icon" />
          </ul>
      </footer>

    </main>
  )
}
