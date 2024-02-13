import { Suspense } from "react";
import MovieCredit, { getCredit } from "../../../../../components/movie-credit";

interface IParams{
    params: {id:string};
  }

  export async function generateMetadata({params:{id}}:IParams){
    const credit = await getCredit(id);
      return {
        name: credit.name,
      };
    }

export default async function movieCredit({params: {id}}: IParams){
    return (
        <div>
          <Suspense fallback={<h1>Loading movie credit</h1>}>
            <MovieCredit id={id} />
          </Suspense>
        </div>
      );
}

