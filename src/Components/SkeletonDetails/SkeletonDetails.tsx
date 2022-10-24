import { Skeleton, Container, Box, Stack, Typography } from "@mui/material";
import React from "react";

export function SkeletonDetails(){

    return(
        <>
        
            
            
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} flexWrap={{xs: 'wrap', md:'nowrap'}}>
                    <Skeleton animation="wave"
                        variant="rectangular"
                        sx={{
                            height: '254.81px',
                            width: {xs: '100%', sm:'90%', md: '39%'},
                            mr:{xs: 0, md: 0},
                            mx:{sm: '10%', md: 0}
                        }}
                    />
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={{xs:'100%', md:'61%'}} ml={{xs: 0, md:13}}>
                        <Typography variant={"h5"} mb={2} mt={{xs: 2, md:0}}><Skeleton animation="wave" width={'40%'}/></Typography>
                        <Stack flexDirection={{xs:'column', md:'row'}} display={'flex'} flexWrap={{xs: 'wrap', md:'nowrap'}} justifyContent={'space-between'}>
                            
                            
                                <Stack width={{xs: '100%', md: '45%'}}>
                                <Skeleton animation="wave" width={'90%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'80%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'60%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'82%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'55%'} sx={{mb: 0.5}}/>
                                </Stack>
                  
                                <Stack width={{xs: '100%', md: '45%'}}>
                                <Skeleton animation="wave" width={'65%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'75%'} sx={{mb: 0.5}}/>
                                <Skeleton animation="wave" width={'70%'} sx={{mb: 0.5}}/>
                                </Stack>
                          
                        </Stack>
                        
                        <Box mt={5} >
                        <Skeleton animation="wave" width={'20%'}/>
                        <Box display={'flex'}>
                        <Skeleton animation="wave" width={'69px'} height={'35px'} sx={{mr:1, mt: 0.3}}/>
                        <Skeleton animation="wave" width={'69px'} height={'35px'} sx={{mr:1, mt: 0.3}}/>
                        <Skeleton animation="wave" width={'69px'} height={'35px'} sx={{mr:1, mt: 0.3}}/>
                        </Box>
                        </Box>
                        
                    </Box>
                </Box>
        
        </>
    )
}