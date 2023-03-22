import { useRouter } from 'next/router'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function CoursePage() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>Course {id}</title>
        <meta name="description" content={`This is the COURSE ${id} page of my app`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={inter.className}>Course {id}</h1>
        <p className={inter.className}>Here's class {id}.</p>
      </main>
    </>
  )
}
