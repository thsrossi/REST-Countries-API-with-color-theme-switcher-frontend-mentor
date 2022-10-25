import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Row } from "../../Components/Header/style";
import getAllCountries from "../../../API/APIGlobal"
import getCountriesByRegion from "../../../API/APICountriesByRegion"

import { CountrieCard } from "../../Components/Card/card";
import { Container, InputAdornment, InputLabel, MenuItem, SelectChangeEvent, Skeleton, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchInput, SelectRegion, StyledSelect } from "../../Components/styledMUI";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Head } from "../../Components/HeadHTML";
import { Countries, Translation } from "../../types/countriesModel";

export interface Options {
    label: string;
    value: string;
}


export default function Home() {
    const [countries, setCountries] = useState<Array<Countries> | undefined>(undefined)
    const [filters, setFilters] = useState<string | unknown>("")
    const [isLoading, setIsLoading] = useState(true)
    const [searchByName, setSearchByName] = useState("")

    //vars to InfiniteScroll
    const [pageHeight, setPageHeight] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [wait, setWait] = useState(false);
    const [limit, setLimit] = useState(20)

    const navigate = useNavigate();

    useEffect(() => {
        function infiniteScroll() {
          setScroll(window.scrollY);
          let auxiliar: number = document.scrollingElement!.scrollHeight;
          setPageHeight(auxiliar - document.body.offsetHeight);
    
          if (scroll >= pageHeight * 0.8 && wait === false) {
            setLimit(limit + 20);
            setWait(true);
            setTimeout(() => {
              setWait(false);
            }, 500);
          }
        }
    
        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);
        return () => {
          window.removeEventListener("wheel", infiniteScroll);
          window.removeEventListener("scroll", infiniteScroll);
        };
      }, [scroll]);

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
        getCountries();
        setLimit(20)
    }, [filters]);

    const optionsRegion: Options[] = [
        { label: 'All', value: 'all' },
        { label: 'Africa', value: 'Africa' },
        { label: 'America', value: 'America' },
        { label: 'Asia', value: 'Asia' },
        { label: 'Europe', value: 'Europe' },
        { label: 'Oceania', value: 'Oceania' }
    ]

    return (
        <Container >
            <Head title={'RestCountries'} description={'Get Countries informations, like population, region, capital'}/>
            <Row>

                <SearchInput
                    
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setSearchByName(e.target.value) }}
                    value={searchByName}
                    sx={{width:'50%'}}
                    placeholder="Search for a country..."
                    startAdornment={
                        <InputAdornment sx={{px:2}}position="start">
                            <SearchOutlinedIcon/>
                        </InputAdornment>
                    }
                />

                <SelectRegion sx={{minWidth:'180px'}}>
                    <InputLabel id="select-label-filter" htmlFor="select">Filter By Region</InputLabel>
                    <StyledSelect
                        labelId="select-label-filter"
                        id="select"
                        value={filters}
                        label="Filter by Region"
                        onChange={(e: SelectChangeEvent<unknown>)=>{setFilters(e.target.value)}}
                        autoWidth
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {optionsRegion.map((option: Options, index: number) => {
                        return (
                            <MenuItem sx={{minWidth:'180px'}} key={index} value={option.value}>{option.label}</MenuItem>
                        )
                    })}
                    </StyledSelect>
                </SelectRegion>
            </Row>
            <Grid
                container spacing={7}
                sx={{ zIndex: 0, paddingBottom: '30px' }}
            >
                {isLoading ?
                    [...Array(12)].map((_e: any, index: number) => {
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
                    countries?.filter((country: Countries) => {
                        if (searchByName == "") {
                            return country
                        } else if (country?.altSpellings?.some((element: string) => {
                            return element?.toLowerCase().includes(searchByName.toLowerCase())
                        }) || country?.name?.common?.toLowerCase().includes(searchByName.toLowerCase()) || 
                            Object?.values(country?.translations)?.some((translations: Translation) => {
                                return Object.values(translations).some((translationsValues: string)=>{
                                    return translationsValues.toLowerCase().includes(searchByName.toLowerCase())
                                } )})) {
                            return country
                        }
                    })?.map((country: Countries | undefined, index: number) => {
                        const delay = index >= 20 ? Math.floor(index % 20)*85  : index * 85
                        return (
                            
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3} display={'flex'} justifyContent={'center'}>
                                <FadeIn delay={delay}>
                                <div onClick={() => {
                                    navigate(`/details/${country?.name?.common}`)
                                    }}>

                                <CountrieCard countrie={country} />
                                </div>
                                </FadeIn>
                            </Grid >
                        )
                    })?.slice(0, limit)
                }
            
            </Grid>
            
        </Container >
    )
}