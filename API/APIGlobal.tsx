import { Countries } from "../src/types/countriesModel"

export default async function getAllCountries(){
    let retorno: Countries | undefined = undefined
    await fetch('https://restcountries.com/v3.1/all').then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    return retorno
}