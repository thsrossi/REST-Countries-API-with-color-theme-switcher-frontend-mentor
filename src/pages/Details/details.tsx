import { Box, Button, Container, Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCountryByName from "../../../API/APICountrieByName"


export function Details() {
    const params: any = useParams()
    const [country, setCountry] = useState<any>({})
    const [isLoading, setIsLoading] = useState(true)
    // const currencies = Object.values(country.currencies)

    function convertArray(array: any, propName: any): any | undefined {
        let converted: any = ''
        array = Object?.values(array)
        if (array.length > 0) {
            console.log(array)
            console.log(array)
            converted = array?.map((element: any, index: any) => {
                console.log(element[propName])
                return (
                    `${element[propName]}${(array.length - 1 != index) ? ", " : '' }`
                    
                )
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
        <Container>
            <Button>Back</Button>
            {isLoading ? <Skeleton /> :
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Box
                        component="img"
                        sx={{
                            height: 'auto',
                            width: '39%',
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src={country?.flags?.svg}
                    />
                    <Stack display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
                        <Typography variant={"h5"}>{country?.name?.common}</Typography>
                        <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                            <Stack mr={4}>
                                <Typography>Native Name: <Typography component={'span'}>{country?.name?.official}</Typography></Typography>
                                <Typography>Population: <Typography component={'span'}>{country?.population?.toLocaleString('pt-BR')}</Typography></Typography>
                                <Typography>Region: <Typography component={'span'}>{country?.region}</Typography></Typography>
                                <Typography>Sub Region: <Typography component={'span'}>{country?.subregion}</Typography></Typography>
                                <Typography>Capital: <Typography component={'span'}>{country?.capital}</Typography></Typography>
                            </Stack>
                            <Stack>
                                <Typography>Top Level Domain: <Typography component={'span'}>{country?.tld}</Typography></Typography>
                                <Typography>Currencies: <Typography component={'span'}>
                                        {convertArray(country.currencies, 'name')}
                                    </Typography>
                                </Typography>
                                <Typography>Languages: <Typography component={'span'}>{country?.region}</Typography></Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            }

            id: {params.id}
        </Container>
    )
}