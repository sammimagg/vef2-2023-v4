import Image from 'next/image';
import logo from '../public/images/hi_logo_blue.svg';
import Navbar from './navbar';
import styles from './page.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Image className={styles.logo}src={logo} alt="logo"/>
            <Navbar/>
        </header>
    )
}