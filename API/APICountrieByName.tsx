import { Countries } from "../src/types/countriesModel"

export default async function getCountryByName(countryName: string | undefined){
    let retorno: Countries | Array<undefined> = [undefined]
    await fetch(`https://restcountries.com/v3.1/name/${encodeURI(countryName!)}?fullText=true`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    console.log(retorno[0])
    return retorno[0]
}