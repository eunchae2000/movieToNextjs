import { count } from "console";
import { URL } from "../app/(home)/page";
import style from "../styles/movie-provider.module.css"

export async function getProvider(id: string){
    const response = await fetch(`${URL}/${id}/providers`);
    return response.json();
}

export default async function MovieProvider({id}:{id:string}){
    const providers = await getProvider(id);
    return (
        <div className={style.container}>
            {Object.values(providers).map((data) => {
                const rent_array = data.rent[0];
                const buy_array = data.buy[0];
                const country = (data.link).slice(-2);
                return (
                    <div className={style.box}>
                        <h1>🌏 {country} 🌏</h1>
                        <a href={data.link}>link to rent or buy</a>
                        <div className={style.content}>
                            <div className={style.item}>
                                <h3>Rent</h3>
                                <img src={rent_array.logo_path}/>
                                <h2>{rent_array.provider_name}</h2>
                            </div>
                            <div className={style.item}>
                                <h3>Buy</h3>
                                <img src={buy_array.logo_path}/>
                                <h2>{buy_array.provider_name}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}