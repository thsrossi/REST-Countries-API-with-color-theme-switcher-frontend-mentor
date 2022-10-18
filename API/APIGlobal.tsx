export default async function getAllCountries(){
    let retorno: any = []
    await fetch('https://restcountries.com/v3.1/all').then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        retorno = result
})
    return retorno
}