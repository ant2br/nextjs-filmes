import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({list}) {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);
    const handleSearch = async () => {
        if(searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
            const json = await result.json();
            setMovieList(json.list)
        }
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Busca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Busca
        </h1>

        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)}></input>
        <button onClick={handleSearch}>Buscar</button>
        <Link href="/"><a>Voltar</a></Link>

        <hr></hr>
        <ul>
            {movieList.map(item=>(
            <li>
              
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