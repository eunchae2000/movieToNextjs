import { Suspense } from "react";
import MovieProvider, { getProvider } from "../../../../../components/movie-provider";

interface IParams{
    params: {id:string};
  }

  export async function generateMetadata({params:{id}}:IParams){
    const provider = await getProvider(id);
      return {
        path: provider.logo_path,
      };
    }


export default function movieProviers({params: {id}}: IParams){
    return (
        <div>
            <Suspense fallback={<h1>Loading movie credit</h1>}>
                <MovieProvider id={id} />
          </Suspense>
        </div>
    )
}