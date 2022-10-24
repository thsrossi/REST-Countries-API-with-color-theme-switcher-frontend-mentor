import { Countries } from "../src/types/countriesModel"

export default async function getCountryByCode(codes: string[]){
    let retorno: string[] | never[] = []
    await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})  

    return retorno.map((element: any)=>{
        return element.name.common
    })
}