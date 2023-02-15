import Image from 'next/image'
import Link from 'next/link'
import styles from './submit.module.css'
import Logo from '../assets/logo.svg'
import '../app/globals.css'

export default function Submit() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/">
          <Image src={Logo} 
                 alt="logo" 
          />
        </Link>
      </header>
      <div className={styles.form}>
        <h2>Share your film with our jury</h2>
        <div className={styles.inputs}>
          <input type="text" placeholder="title" className={styles.input} />
          <input type="text" placeholder="directed by" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <input type="text" placeholder="link" className={styles.input} />
        </div>  
        <button className={styles.submit} id={styles.submitBtn}>Submit</button>
      </div>
    </main>
  )
}
