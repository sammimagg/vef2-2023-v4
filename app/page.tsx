import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import DepartmentPage from './departments/page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.container}>
      {/* @ts-expect-error Server Component */}
      <DepartmentPage/>
    </main>
  )
}
