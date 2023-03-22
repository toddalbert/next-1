import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Courses() {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="This is the COURSES page of my app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Courses</h1>
        <p className={inter.className}>Here's a class.</p>
      </main>
    </>
  )
}
