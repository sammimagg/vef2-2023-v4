import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import DepartmentPage from './departments/page'
import RootLayout from './layout'
import { describe } from 'node:test'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        {/* @ts-expect-error Server Component */}
        <DepartmentPage/>
      </>
  )
}
