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
          Filmes em destaque
        </h1>
        <Link href="/busca"><a>Ir para a busca</a></Link>
        <Link href="/sobre"><a>Sobre</a></Link>
        <ul>
          {list.map(item=>(
            <li key={item.id}>
              
                <>
                
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br/>
                <Link href={`/movie/${item.id}`}>
                <a>{item.title}</a>
                </Link>
                </>

                
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://filmes.brener.ml/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }

}
