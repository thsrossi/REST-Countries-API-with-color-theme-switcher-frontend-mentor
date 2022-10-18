import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../Components/Header/style";
import getAllCountries from "../../API/APIGlobal"

import { HomePage } from "./homeStyle";
import { CountrieCard } from "../Components/Card/card";

export default function Home() {
    const [countries, setCountries] = useState<any>([])
    const [filters, setFilters] = useState("all")

    async function getCountries(){
        filters == "all" && 
            setCountries(await getAllCountries())
    }

    useEffect(()=>{
        getCountries()
    },[filters])

    console.log(countries)

    const optionsRegion = [
        {label: 'All', value: 'all'},
        { label: 'Africa', value: 'Africa' },
        { label: 'America', value: 'America' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ]

    return (
        <HomePage>

            <Row justifyContent={'space-between'}>
                <div>
                    <input type="text" />
                </div>
                <select>
                    {optionsRegion.map((option: any, index: number) => {
                        return (
                            <option key={index} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
            </Row>
            <Grid container justifyContent={'center'} alignItems={'center'} className="flex" spacing={5}>
                {countries.map((countrie: any, index: any) => {
                    return(
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} justifyContent={'center'}>
                        <CountrieCard countrie={countrie}/>
                    </Grid >
                    )
                })}
                
            </Grid>

        </HomePage >
    )
}