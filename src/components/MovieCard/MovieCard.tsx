import Card from '@mui/material/Card';
import CardContend from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import type { MovieTrending } from '../../types/moive';
import { CardActions, CardMedia, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL_SMALL } from '../../constants/tmdbURL';


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


export default function MovieCard(props: MovieTrending) {
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
                <Link
                  to={`/movie/${props.id}`}
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
                    image={`${IMAGE_BASE_URL_SMALL}${props.poster_path}`}
                    alt={props.title}
                    >
                  </CardMedia>
                </Link>

                <CardContend>
                    <Typography  
                      variant='h6' 
                      component={Link}
                      to={`/movie/${props.id}`}
                      sx={{ 
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover': {
                              color: 'primary.main'
                          },
                      }}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant='body2'>
                      {props.release_date}
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