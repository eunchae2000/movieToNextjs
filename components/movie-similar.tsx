import { URL } from "../app/(home)/page";
import style from "../styles/movie-similar.module.css";
import { getMovie } from "./movie-info";

export async function getSimilar(id:string){
    const response = await fetch(`${URL}/${id}/similar`);
    return response.json();

}

export default async function MovieSimilar({id}:{id:string}){
    const similar = await getSimilar(id);
    const movie = await getMovie(id);
    return (
        <div>
            <h1 className={style.title}>A movie similar to {movie.title}🎬</h1>
            <div className={style.container}>
                {similar.map((sim)=> (
                    <div className={style.box}>
                        <h1>{sim.original_title}</h1>
                        <a href={`/movies/${sim.id}`}>
                        <img src={sim.poster_path} alt={sim.original_title} className={style.poster}/>
                        </a>
                        <p>{sim.vote_average === null ? "" : <p>⭐️ {sim.vote_average}</p>}</p>
                        <p>{sim.release_date}</p>
                        <p>❤️ {sim.popularity}</p>
                        <p>{sim.adult}</p>
                        <p className={style.over}>{sim.overview}</p>
                    </div>
                ))}
            </div>
        </div>
            
    )
}