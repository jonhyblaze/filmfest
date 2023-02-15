import Email from "../assets/logo_mail2.svg"
import Facebook from "../assets/logo_facebook2.svg"
import Instagram from "../assets/logo_instagram2.svg"
import Twitter from "../assets/logo_twitter2.svg"



import Image from 'next/image'
import Link from 'next/link'
import styles from './SocialNetLinks.module.css'

export default function SocialNetLinks () {
    return (
      <ul className={styles.links}>
        <Image src={Facebook} alt="Facebook icon" priority/>
        <Image src={Twitter} alt="Twitter icon" priority/>
        <Image src={Instagram} alt="Instagram icon" priority/>
        <Image src={Email} alt="Email icon" priority/>
      </ul>
    )
}