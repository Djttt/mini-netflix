import Card from '@mui/material/Card';
import CardContend from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import type { Movie } from '../../types/moive';
import { CardActions, CardMedia, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


export default function MovieCard(props: Movie) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card 
                variant='outlined'
                sx={{
                    width: 250,
                    height: 'auto',
                }}
             >
                <CardMedia 
                    component="img"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '3 / 4',
                        borderRadius: 3,
                        objectFit: 'cover',
                    }}
                    image={`${IMAGE_BASE_URL}${props.poster_path}`}
                    alt={props.title}>
                </CardMedia>
                <CardContend>
                    <Typography  variant='h6' gutterBottom>
                        {props.title}
                    </Typography>
                </CardContend>
                <CardActions disableSpacing>    
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                 <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContend>
                        <Typography variant='body2' sx={{ marginBottom: 2 }}>
                            {props.overview}
                        </Typography>
                    </CardContend>
                 </Collapse>
             </Card>
        </>
    )
}