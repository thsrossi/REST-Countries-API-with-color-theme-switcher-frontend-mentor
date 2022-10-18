export default async function getAllCountries(){
    let retorno: any = []
    await fetch('https://restcountries.com/v3.1/all').then(
        (response:any)=>{
            response = response.json()
        }
    ).then((result) => {
        console.log(result)
        retorno = result
})
    console.log(retorno)
    return retorno
}