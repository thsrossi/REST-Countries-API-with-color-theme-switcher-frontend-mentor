import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../Components/Header/style";
import getAllCountries from "../../API/APIGlobal"

import { HomePage } from "./homeStyle";

export default function Home() {
    const [countries, setCountries] = useState<any>([])
    useEffect(()=>{
        setCountries(getAllCountries())
        console.log(getAllCountries())
    },[])

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
            <Grid container justifyContent={'space-between'} className="flex">
                <Grid item xs={12} sm={6} md={3}>
                    01
                </Grid >
                <Grid item xs={12} sm={6} md={3}>
                    02
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    03
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    04
                </Grid>
            </Grid>

        </HomePage >
    )
}