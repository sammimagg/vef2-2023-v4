import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/hi_logo_blue.svg';
import Navbar from './navbar';
import styles from './page.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <Image className={styles.logo}src={logo} alt="logo"/>
            </Link>
            <Navbar/>
        </header>
    )
}