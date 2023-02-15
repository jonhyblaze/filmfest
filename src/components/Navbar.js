import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from "../assets/logo.svg"

export default function Navbar() {
    return (
      <header className={styles.header}>
        <Image src={Logo} alt="Logo" width={218} height={94} className={styles.logo}/>
        <ul className={styles.nav}>
          <li className={styles.navItem}><a className={styles.navItemLink} href="#program">Program</a></li>
          <li className={styles.navItem}>Jury</li>
          <li id={styles.submitBtn}><Link href="/submit">Submit</Link></li>
        </ul>
      </header> 
    )
    
}