export default async function getCountryByName(countryName: string){
    let retorno: any = []
    await fetch(`https://restcountries.com/v3.1/name/${encodeURI(countryName)}?fullText=true`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    return retorno[0]
}