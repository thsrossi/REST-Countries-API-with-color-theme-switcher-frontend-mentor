export default async function getCountriesByRegion(region: string){
    let retorno: any = []
    await fetch(`https://restcountries.com/v3.1/region/${region}`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    return retorno
}