import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface Props{
    countrie: any
}

export function CountrieCard({countrie}: Props){
    return(
    <Card sx={{ maxWidth: '345px', borderRadius: '6px'}}>
      <CardActionArea sx={{ paddingBottom: 3 }}>
        <CardMedia
          component="img"
          height="170"
          image={countrie?.flags.png}
          alt={countrie?.name.common + " flag"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" 
        //   sx={{display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis'
        //   }}
          >
            {countrie?.name.common}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {countrie.population} <br/>
            Region: {countrie.region} <br/>
            Capital: {countrie.capital} <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}