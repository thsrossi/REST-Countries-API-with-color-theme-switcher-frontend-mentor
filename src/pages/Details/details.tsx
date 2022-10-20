import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCountryByName from "../../../API/APICountrieByName"


export function Details(){
    const params: any = useParams()
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    async function getCountry() {
        setIsLoading(true);
        setCountry(await getCountryByName(params?.id))
        setIsLoading(false)
    };

    useEffect(()=>{
        getCountry()
    },[])

    console.log(country)

    return(
        <div>id: {params.id}</div>
    )
}