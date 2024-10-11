import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export const TimeCard = ({imgSrc, Title, Description}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {
          imgSrc&&<CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt="green iguana"
        />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}