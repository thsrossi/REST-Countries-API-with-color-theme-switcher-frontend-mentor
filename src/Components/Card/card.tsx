import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


interface Props {
  countrie: any
}

export function CountrieCard({ countrie }: Props) {
  return (
    <Card sx={{ width: '240.4px', maxWidth: '100%', borderRadius: '6px', zIndex: 0, boxShadow: '1px 1px 10px 3px rgba(0,0,0,0.12)' }} elevation={0}>
      <CardActionArea sx={{ paddingBottom: 1, height: '350px' }}>
        <CardMedia
          component="img"
          height="170"
          image={countrie?.flags.png}
          alt={countrie?.name.common + " flag"}
        />
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant="h6"
          >
            {countrie?.name.common}
          </Typography>
          <Typography>
            Population: <Typography variant="body2" component="span">
              {countrie.population.toLocaleString('pt-BR')}</Typography> <br />
            Region: <Typography variant="body2" component="span">{countrie.region}</Typography> <br />
            {countrie.capital &&
              <>
                <Typography component="span">Capital: </Typography>
                <Typography variant="body2" component="span">
                  {countrie?.capital}
                </Typography>
                <br />
              </>
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}