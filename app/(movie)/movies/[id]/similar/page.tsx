import { Suspense } from "react";
import MovieSimilar, { getSimilar } from "../../../../../components/movie-similar";

interface IParams{
    params: {id:string};
}

export async function generateMetadata({params:{id}}:IParams){
    const similar = await getSimilar(id);
      return {
        title: similar.title,
      };
    }

export default function movieSimilar({params:{id}}:IParams){
    return(
        <div>
            <Suspense fallback={<h1>Loading movie similar</h1>}>
                <MovieSimilar id={id}/>
            </Suspense>
        </div>
    )
}


