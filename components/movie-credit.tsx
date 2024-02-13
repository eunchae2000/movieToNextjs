import { URL } from "../app/(home)/page";
import style from "../styles/movie-credit.module.css"
import { getMovie } from "./movie-info";

export async function getCredit(id: string){
    const response = await fetch(`${URL}/${id}/credits`);
    return response.json();
}


export default async function MovieCredit({id}: {id:string}){
    const credits = await getCredit(id);
    const movie = await getMovie(id);
    return (
        <div>
            <h1 className={style.title}>{movie.title}'s Credit🎞️</h1>
            <div className={style.container}>
            {credits.map((credit) => (
                <div className={style.box}>
                    <img src={credit.profile_path} className={style.poster} alt={credit.name}/>
                    <div className={style.info}>
                        <p>📍 Name</p>
                        <h2>{credit.name}</h2>
                        <p>🤠 Character</p>
                        <h2>{credit.character}</h2>
                        <p>⭐️ Popularity</p>
                        <h2>{credit.popularity}</h2>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}