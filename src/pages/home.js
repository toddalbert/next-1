import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <Head>
        <title>This is HOME</title>
        <meta name="description" content="This is the HOME page of my app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Welcome</h1>
      </main>
    </>
  )
}
