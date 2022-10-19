import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../Components/Header/style";
import getAllCountries from "../../API/APIGlobal"

import { HomePage } from "./homeStyle";
import { CountrieCard } from "../Components/Card/card";
import { Container, Grow, InputAdornment, OutlinedInput, Skeleton, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default function Home() {
    const [countries, setCountries] = useState<any>([])
    const [filters, setFilters] = useState("all")
    const [isLoading, setIsLoading] = useState(true)
    const [searchByName, setSearchByName] = useState("")

    async function getCountries() {
        setIsLoading(true);
        (filters == "all" || filters == "") &&
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
        <Container>

            <Row>
                
                <OutlinedInput 
                    onChange={(e:any)=>{setSearchByName(e.target.value)}}
                    placeholder="Search for a country..." 
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchOutlinedIcon/>
                        </InputAdornment>
                    }
                />
                
                <select placeholder="">
                    <option value="" disabled selected>Filter By Region</option>
                    {optionsRegion.map((option: any, index: number) => {
                        return (
                            <option key={index} value={option.value}>{option.label}</option>
                        )
                    })}
                </select>
            </Row>

            <Grid
                container  spacing={7}
                sx={{ zIndex: 0, marginTop: '20px'}} 
            >
                {isLoading ? 
                    [...Array(12)].map((e: any, index:any) => {
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
                countries?.filter((country:any)=>{
                    if(searchByName == ""){
                        return country
                    }
                    else if(country?.altSpellings?.some((altSpelling:string)=>{
                        console.log(altSpelling)
                        altSpelling?.toLowerCase()?.includes(searchByName?.toLowerCase())

                    })){
                        return country
                    }
                })?.map((countrie: any, index: any) => {
                    return (
                        
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3} display={'flex'} justifyContent={'center'}>
                            {/* <Grow in={!isLoading}> */}
                                <CountrieCard countrie={countrie} />
                            {/* </Grow> */}
                        </Grid >
                    )
                })
                // .slice(0, 20)
                }

            </Grid>

        </Container >
    )
}