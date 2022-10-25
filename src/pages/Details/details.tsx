import { Box, Button, Container, Grid, Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link, Params, useNavigate, useParams } from 'react-router-dom';
import getCountryByName from "../../../API/APICountrieByName"
import getCountryByCode from "../../../API/APICountryByCode"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { SkeletonDetails } from '../../Components/SkeletonDetails/SkeletonDetails';
import FadeIn from 'react-fade-in';
import notFound from '../../assets/images/notfound.svg'
import { Head } from "../../Components/HeadHTML";
import { Countries } from '../../types/countriesModel';

export function Details() {
    const params = useParams<Params>();
    const [country, setCountry] = useState<Countries | undefined>(undefined);
    const [tryedSetCountry, setTryedSetCountry] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    const [borders, setBorders] = useState<Array<string> | Array<undefined>>([])

    // const currencies = Object.values(country.currencies)

    function convertArray(array: any, propName?: string, searchByPropName?: boolean): any | undefined {
        let converted: any = ''
        if (array != undefined) {
            array = Object?.values(array)
            converted = array?.map((element: any, index: number) => {
                
                if (searchByPropName) {
                    return (
                        `${element[propName!]}${(array?.length - 1 != index) ? ", " : ''}`

                    )
                }
                else {
                    return (
                        `${element}${(array?.length - 1 != index) ? ", " : ''}`
                    )
                }
            })
        }
        return converted
    }

    async function getCountry() {
        setIsLoading(true);
        setCountry(await getCountryByName(params.id))
        setTryedSetCountry(true)
    };

    useEffect(() => {
        getCountry()
    }, [params.id])

    async function getCountryBorders() {
        if (country?.borders) {
            setBorders(await getCountryByCode(country?.borders))

        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (country != undefined) {
            if (Object.keys(country).length != 0) {
                getCountryBorders()
            } else{
                setIsLoading(false)
            }
        } else if(tryedSetCountry){
            setIsLoading(false)
        }
    }, [country, tryedSetCountry])

    return (
        <>
            <Head
                title={params.id + ' Details'}
                description={"Get " + params.id + " details like native name, population, region, sub region, capital, top level domain, languages, border countries"}
            />
            <Container sx={{ mt: { xs: 4, md: 6 } }}>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackOutlinedIcon />}
                    onClick={() => navigate('/')}
                >
                    Back
                </Button>
            </Container>

            <Container sx={{ py: { xs: 4, md: 6 } }}>
                {isLoading ?
                    <SkeletonDetails />
                    :
                    country != undefined ?
                        <FadeIn>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} flexWrap={{ xs: 'wrap', md: 'nowrap' }}>

                                <Box
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        width: { xs: '100%', sm: '90%', md: '39%' },
                                        mr: { xs: 0, md: 0 },
                                        mx: { sm: '10%', md: 0 }
                                    }}
                                    alt="The house from the offer."
                                    src={country?.flags?.png}
                                />
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={{ xs: '100%', md: '61%' }} ml={{ xs: 0, md: 13 }}>
                                    <Typography variant={"h5"} fontWeight={700} mb={2} mt={{ xs: 2, md: 0 }}>{country?.name?.common}</Typography>
                                    <Stack flexDirection={{ xs: 'column', md: 'row' }} display={'flex'} flexWrap={{ xs: 'wrap', md: 'nowrap' }} justifyContent={'space-between'}>


                                        <Stack maxWidth={{ xs: '100%', md: '45%' }}>
                                            <Typography pb={0.5}>Native Name: <Typography variant="body2" component={'span'}>{country?.name?.official}</Typography></Typography>
                                            <Typography pb={0.5}>Population: <Typography variant="body2" component={'span'}>{country?.population?.toLocaleString('pt-BR')}</Typography></Typography>
                                            <Typography pb={0.5}>Region: <Typography variant="body2" component={'span'}>{country?.region}</Typography></Typography>
                                            <Typography pb={0.5}>Sub Region: <Typography variant="body2" component={'span'}>{country?.subregion}</Typography></Typography>
                                            <Typography pb={0.5}>Capital: <Typography variant="body2" component={'span'}>{convertArray(country?.capital)}</Typography></Typography>
                                        </Stack>

                                        <Stack maxWidth={{ xs: '100%', md: '45%' }}>
                                            <Typography pb={0.5}>Top Level Domain: <Typography variant="body2" component={'span'}>{country?.tld}</Typography></Typography>
                                            <Typography pb={0.5}>Currencies: <Typography variant="body2" component={'span'}>
                                                {convertArray(country.currencies, 'name', true)}
                                            </Typography>
                                            </Typography>
                                            <Typography pb={0.5}>Languages: <Typography variant="body2" component={'span'}>{convertArray(country?.languages)}</Typography></Typography>
                                        </Stack>

                                    </Stack>
                                    {borders.length != 0 &&
                                        <Box mt={5} >
                                            <Typography component={'span'}>Border Countries: </Typography>
                                            <Box>
                                                {borders?.map((border: string | undefined) => {
                                                    return <Button key={border} size={'small'} sx={{ mr: 1, mt: 1 }} variant="outlined" onClick={() => navigate(`/details/${border}`)}>{border}</Button>
                                                })}
                                            </Box>
                                        </Box>
                                    }
                                </Box>

                            </Box>
                        </FadeIn>
                        : <Container sx={{ py: { xs: 4, md: 6 } }}>
                            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
                                <Box mx={'auto'} width={{ xs: '90%', md: '35%' }} mb={6} component="img" src={notFound} />
                                <Typography mx={'auto'}>Selected Country not found, <Link to={'/'}>Go Back Home</Link> or try again in a few minutes later.</Typography>
                            </Box>
                        </Container>
                }


            </Container>
        </>
    )
}