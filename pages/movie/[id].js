import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filme | Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Filme: {info.title}
        </h1>

        <p>Nota: {info.vote_average}</p>

        <p>{info.overview}</p>

        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400"></img>
        <Link href="/"><a>Voltar</a></Link>
        
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props: {
      info: json.info
    }
  }

}
