import Image from 'next/image'
import Link from 'next/link'
import styles from './submit-done.module.css'
import Logo from '../assets/logo.svg'
import '../app/globals.css'

export default function SubmitDone() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/">
          <Image src={Logo} 
                 alt="logo" 
          />
        </Link>
      </header>
      <div className={styles.output}>
        <div className={styles.textOutput}>
          <h3>Thanks for submitting</h3>
          <p>We will review your work and write back shortly. Please subscribe to our social networks, which is on our home page.</p>
        </div>
        <Link href="/" className={styles.link}>
          <button className={styles.goHome} id={styles.goHomeBtn}>Go to homepage</button>
        </Link>
      </div>
    </main>
  )
}
