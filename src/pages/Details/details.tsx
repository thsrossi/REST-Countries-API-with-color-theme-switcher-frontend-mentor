import { Box, Button, Container, Grid, Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryByName from "../../../API/APICountrieByName"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


export function Details() {
    const params: any = useParams()
    const [country, setCountry] = useState<any>({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate= useNavigate()
    // const currencies = Object.values(country.currencies)

    function convertArray(array: any, propName?: any, searchByPropName?: boolean): any | undefined {
        let converted: any = ''
        array = Object?.values(array)
        if (array.length > 0) {
            console.log(array)
            console.log(array)
            converted = array?.map((element: any, index: any) => {
                console.log(element[propName])
                if(searchByPropName){
                    return (
                    `${element[propName]}${(array.length - 1 != index) ? ", " : '' }`
                    
                )}
                else{
                    return(
                        `${element}${(array.length - 1 != index) ? ", " : '' }`
                    )
                }
            })
        }
        console.log(converted)
        return converted
    }

    async function getCountry() {
        setIsLoading(true);
        setCountry(await getCountryByName(params?.id))
        setIsLoading(false)
    };

    useEffect(() => {
        getCountry()
    }, [])

    // useEffect(() => {
    //     convertArray(country?.currencies, 'name')
    // }, [country])

    console.log(country)

    return (
        <>
            
        <Container sx={{mt:{xs: 4, md: 8}}}>
            <Button 
            variant="outlined" 
            startIcon={<ArrowBackOutlinedIcon />}
            onClick={()=>navigate('/')}
            >
                Back
            </Button>
        </Container>

        <Container sx={{py:{xs: 4, md: 8}}}>
            
            {isLoading ? <Skeleton /> :
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} flexWrap={{xs: 'wrap', md:'nowrap'}}>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: {xs: '100%', sm:'90%', md: '39%'},
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            mr:{xs: 0, md: 0},
                            mx:{sm: '10%', md: 0}
                        }}
                        alt="The house from the offer."
                        src={country?.flags?.png}
                    />
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={{xs:'100%', md:'61%'}} ml={{xs: 0, md:13}}>
                        <Typography variant={"h5"} fontWeight={700} my={2}>{country?.name?.common}</Typography>
                        <Stack flexDirection={{xs:'column', md:'row'}} display={'flex'} flexWrap={{xs: 'wrap', md:'nowrap'}} justifyContent={'space-between'}>
                            
                            
                                <Stack maxWidth={{xs: '100%', md: '45%'}}>
                                <Typography>Native Name: <Typography component={'span'}>{country?.name?.official}</Typography></Typography>
                                <Typography>Population: <Typography component={'span'}>{country?.population?.toLocaleString('pt-BR')}</Typography></Typography>
                                <Typography>Region: <Typography component={'span'}>{country?.region}</Typography></Typography>
                                <Typography>Sub Region: <Typography component={'span'}>{country?.subregion}</Typography></Typography>
                                <Typography>Capital: <Typography component={'span'}>{convertArray(country?.capital)}</Typography></Typography>
                                </Stack>
                  
                                <Stack maxWidth={{xs: '100%', md: '45%'}}>
                                <Typography>Top Level Domain: <Typography component={'span'}>{country?.tld}</Typography></Typography>
                                <Typography>Currencies: <Typography component={'span'}>
                                        {convertArray(country.currencies, 'name', true)}
                                    </Typography>
                                </Typography>
                                <Typography>Languages: <Typography component={'span'}>{convertArray(country?.languages)}</Typography></Typography>
                                </Stack>
                          
                        </Stack>
                    </Box>
                </Box>
            }
        </Container>
        </>
    )
}