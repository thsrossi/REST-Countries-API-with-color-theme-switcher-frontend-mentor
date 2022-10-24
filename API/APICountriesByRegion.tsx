import { Countries } from "../src/types/countriesModel"

export default async function getCountriesByRegion(region: string){
    let retorno: Countries | Array<undefined> = [undefined]
    await fetch(`https://restcountries.com/v3.1/region/${region}`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    return retorno
}