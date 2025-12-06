import { type CreditsInfo } from "../../types/moive";
import { getMovieCredits } from "../../api/getMovieCredits";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material"

const MovieCreditsInfo = ({ id }: { id: number }) => {
  const [creditsInfo, setCreditsInfo] = useState<CreditsInfo | null>(null);

  useEffect(() => {
    getMovieCredits(id).then((data) => {
      setCreditsInfo(data);
    });
  }, [id]);

  return (
    <>
        { creditsInfo && 
        <Box
            component="div"
            display="flex"
            sx={{
            width: "70%",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            flexWrap: 'wrap',
            }}
        >   
            {
                Object.values(creditsInfo.crew
                    .filter(person => 
                        ['Director', 'Writer', 'Characters', 'Story'].includes(person.job)
                    )
                    .reduce((acc, person) => {
                        if (!acc[person.id]) {
                            acc[person.id] = {jobs: [person.job], name: person.name}
                        } else {
                            acc[person.id].jobs.push(person.job);
                        }
                        return acc;
                    }, {} as Record<number, { jobs: string[]; name: string }>))
                    .map((person) => (
                        <Box component='div' key={Object.keys(creditsInfo.crew.filter(p => p.id === creditsInfo.crew.find(c => c.name === person.name)?.id))[0]}
                            marginTop={3}
                            sx={{
                                flex: "0 0 33.33%"
                            }}
                        >
                            <Typography component='p'>{person.name}</Typography>
                            <Typography component='p'>
                                {
                                   person.jobs.length > 2 ? person.jobs.slice(0, 1).join(',')
                                                          : person.jobs.join(',')
                                }
                            </Typography>
                        </Box>
                    ))
            }
        </Box>
        }
    </>
  );
};

export default MovieCreditsInfo;
