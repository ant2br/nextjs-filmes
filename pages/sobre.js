import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Destaques</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Sobre esse site
        </h1>
        <p>Site feito usando o framework Next.js</p>
        <Link href="/"><a>Voltar</a></Link>
        
      </main>
    </div>
  )
}

