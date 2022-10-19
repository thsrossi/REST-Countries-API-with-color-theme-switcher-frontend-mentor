import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../Components/Header/style";
import getAllCountries from "../../API/APIGlobal"

import { HomePage } from "./homeStyle";
import { CountrieCard } from "../Components/Card/card";
import { Grow, Skeleton, Stack, Typography } from "@mui/material";

export default function Home() {
    const [countries, setCountries] = useState<any>([])
    const [filters, setFilters] = useState("all")
    const [isLoading, setIsLoading] = useState(true)

    async function getCountries() {
        setIsLoading(true)
        filters == "all" &&
            setCountries(await getAllCountries())
        setIsLoading(false)
    }

    useEffect(() => {
        getCountries()
    }, [filters])

    console.log(countries)

    const optionsRegion = [
        { label: 'All', value: 'all' },
        { label: 'Africa', value: 'Africa' },
        { label: 'America', value: 'America' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ]

    return (
        <HomePage>

            <Row>
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

            <Grid
                container justifyContent={'space-between'} alignItems={'center'} spacing={6}
                sx={{ zIndex: 0 }}
            >
                {isLoading ? 
                    [...Array(8)].map((e: any, index:any) => {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3} justifyContent={'center'}>
                                <Stack spacing={1} justifyContent={'center'}>
                                <Skeleton animation="wave" variant="rounded" sx={{maxWidth:'345px'}} height={170}/>
                                <Typography sx={{ pl: 1 }} variant="h6"><Skeleton animation="wave" width="70%"/></Typography>
                                </Stack>
                                <Stack sx={{ pl: 1 }}>
                                <Skeleton  width="60%" animation="wave"/>
                                <Skeleton sx={{ pl: 1 }} width="50%" animation="wave"/>
                                <Skeleton sx={{ pl: 1 }} width="60%" animation="wave"/>

                                </Stack>
                                
                                
                            </Grid>
                        )
                    })

                :
                countries?.map((countrie: any, index: any) => {
                    return (
                        
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3} justifyContent={'center'}>
                            {/* <Grow in={!isLoading}> */}
                                <CountrieCard countrie={countrie} />
                            {/* </Grow> */}
                        </Grid >
                    )
                }).slice(0, 20)}

            </Grid>

        </HomePage >
    )
}