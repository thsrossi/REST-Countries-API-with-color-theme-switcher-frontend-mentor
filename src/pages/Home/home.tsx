import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../../Components/Header/style";
import getAllCountries from "../../../API/APIGlobal"
import getCountriesByRegion from "../../../API/APICountriesByRegion"

import { CountrieCard } from "../../Components/Card/card";
import { Container, FormControl, Grow, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Skeleton, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchInput, SelectRegion } from "../../Components/styledMUI";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [countries, setCountries] = useState<any>([])
    const [filters, setFilters] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [searchByName, setSearchByName] = useState("")

    const navigate = useNavigate();

    async function getCountries() {
        setIsLoading(true);
        if(filters == "all" || filters == ""){
            setCountries(await getAllCountries())
            setIsLoading(false)
        }else{
            setCountries(await getCountriesByRegion(filters))
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getCountries()
    }, [filters]);

    const optionsRegion = [
        { label: 'All', value: 'all' },
        { label: 'Africa', value: 'Africa' },
        { label: 'America', value: 'America' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ]

    return (
        <Container >

            <Row>

                <SearchInput
                    
                    onChange={(e: any) => { setSearchByName(e.target.value) }}
                    value={searchByName}
                    sx={{width:'50%'}}
                    placeholder="Search for a country..."
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    }
                />

                <SelectRegion sx={{minWidth:'180px'}}>
                    <InputLabel id="select-label-filter" htmlFor="select">Filter By Region</InputLabel>
                    <Select
                        labelId="select-label-filter"
                        id="select"
                        value={filters}
                        label="Filter by Region"
                        onChange={(e:any)=>{setFilters(e.target.value)}}
                        autoWidth
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {optionsRegion.map((option: any, index: number) => {
                        return (
                            <MenuItem sx={{minWidth:'180px'}} key={index} value={option.value}>{option.label}</MenuItem>
                        )
                    })}
                    </Select>
                </SelectRegion>
            </Row>

            <Grid
                container spacing={7}
                sx={{ zIndex: 0, paddingBottom: '30px' }}
            >
                {isLoading ?
                    [...Array(12)].map((e: any, index: any) => {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Stack spacing={1} justifyContent={'center'} sx={{width:'255.4px' }}>
                                    <Skeleton animation="wave" variant="rounded" sx={{ maxWidth: '345px' }} height={170} />
                                    <Typography sx={{ pl: 1 }} variant="h6"><Skeleton animation="wave" width="70%" /></Typography>
                                </Stack>
                                <Stack sx={{ pl: 1, width: '255.4px'}}>
                                    <Skeleton width="60%" animation="wave" />
                                    <Skeleton sx={{ pl: 1 }} width="50%" animation="wave" />
                                    <Skeleton sx={{ pl: 1 }} width="60%" animation="wave" />

                                </Stack>


                            </Grid>
                        )
                    })

                    :
                    countries?.filter((country: any) => {
                        if (searchByName == "") {
                            return country
                        } else if (country?.altSpellings?.some((element: any, index: number) => {
                            return element?.toLowerCase().includes(searchByName.toLowerCase())
                        }) || country?.name.common.toLowerCase().includes(searchByName.toLowerCase()) || 
                            Object.values(country?.translations).some((translations: any) => {
                                return Object.values(translations).some((translationsValues: any)=>{
                                    return translationsValues.toLowerCase().includes(searchByName.toLowerCase())
                                } )})) {
                            return country
                        }
                    }).map((country: any, index: any) => {
                        return (

                            <Grid key={index} item xs={12} sm={6} md={4} lg={3} display={'flex'} justifyContent={'center'}>
                                {/* <Grow in={!isLoading}> */}
                                <div onClick={() => navigate(`/details/${country?.name.common}`)}>
                                <CountrieCard countrie={country} />
                                </div>
                                {/* </Grow> */}
                            </Grid >
                        )
                    })?.slice(0, 20)
                }

            </Grid>

        </Container >
    )
}