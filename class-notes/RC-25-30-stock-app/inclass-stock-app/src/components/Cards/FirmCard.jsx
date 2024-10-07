import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FirmCard({_id, name, phone, address, image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140, objectFit:"contain" }}
        image={image}
        component="img"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2">
          Phone: {phone}
        </Typography>
      </CardContent>
      
      <CardActions>
        <EditIcon/>
        <DeleteIcon/>
      </CardActions>
    </Card>
  );
}