import { Divider, Box, Typography, Tabs, Tab, ImageList, ImageListItem } from "@mui/material"
import type { MovieImagesMedia, Backdrop, Poster } from "../types/moive"
import { useEffect, useState } from "react"
import { IMAGE_BASE_URL_HD } from "../constants/tmdbURL";

const Media = ({ Id, getImages }: { Id: number, getImages: (mediaId: number) => Promise<MovieImagesMedia> }) => {
    
    const [imagesMedia, setImagesMedia] = useState<MovieImagesMedia>();

    useEffect(() => {
        getImages(Id).then(data => {
            setImagesMedia(data);
        })
    }, [Id, getImages]);

    return (
        <>
            <Box>
                {/* 水平分割线 */}
                <Divider />
                
                <Box 
                    display="flex"
                    sx={{
                        width: "100%",
                        gap: 0,
                        borderColor: "diveder",
                        justifyItems: "center",
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 4, paddingTop: 1}}>
                        媒体
                    </Typography>
                    {/* 选项卡区域 */}
                    {
                       imagesMedia && <MediaTab 
                                            backDrops={imagesMedia.backdrops}
                                            posters={imagesMedia.posters}
                                      />
                    }
                </Box>
            </Box>
        </>
    )
}


const MediaTab = ({backDrops, posters}: {backDrops: Backdrop[], posters: Poster[]}) => {
    const [value, setValue] = useState(0);

    const hanleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box 
            sx={{
                width: "98%"
            }}  
        >
            <Tabs 
                value={value} 
                onChange={hanleChange}
                textColor="inherit"
                sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                }}
            >
                <Tab label="最热门" sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}></Tab>
                <Tab label={`视频`} sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}></Tab>
                <Tab label={`剧照${backDrops.length}`} sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}></Tab>
                <Tab label={`海报${posters.length}`} sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}></Tab>
                <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                    {
                        value === 2 && <LinkTab label="查看全部剧照" href={`/movie/${0}movieId/images/backdrops`}></LinkTab>
                    }
                    {
                        value === 3 && <LinkTab label="查看全部海报" href={`/movie/${0}movieId/images/posters`}></LinkTab>
                    }
                </Box>
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <ImageList sx={{ 
                        width: "100%",
                        gap: 0,
                        overflowX: 'auto', 
                        flexWrap: 'nowrap',
                        display: 'flex',
                 } } cols={2}>
                    {
                        backDrops.slice(0, 3).map(item => (
                            <ImageListItem key={item.file_path}
                                sx={{
                                    aspectRatio: '1.778',
                                    height: 300,
                                    minWidth: 434,   
                                }}
                            >
                                <img 
                                    src={`${IMAGE_BASE_URL_HD}${item.file_path}`}
                                    alt={item.file_path}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ImageList sx={{ 
                        gap: 0,
                        height: 300,
                        overflowX: 'auto', 
                        flexWrap: 'nowrap',
                        display: 'flex',

                 } } cols={3}>
                    this is videos panle!
                </ImageList>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ImageList sx={{ 
                        width: "100%",
                        gap: 0,
                        overflowX: 'auto', 
                        flexWrap: 'nowrap',
                        display: 'flex',
                    }}
                    cols={undefined}
                >
                    {
                        backDrops.slice(0, 9).map(item => (
                            <ImageListItem key={item.file_path}
                                sx={{
                                    aspectRatio: '1.778',
                                    height: 300,
                                    minWidth: 434,       
                                }}>
                                <img 
                                    src={`${IMAGE_BASE_URL_HD}${item.file_path}`}
                                    alt={item.file_path}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <ImageList sx={{ 
                                width: "100%",
                                gap: 0,
                                overflowX: 'auto',
                                flexWrap: 'nowrap',
                                display: 'flex'
                              }} 
                    cols={undefined}
                >
                    {
                        posters.slice(0, 9).map((item) => (
                            <ImageListItem key={item.file_path} 
                                sx={{
                                    aspectRatio: '0.667',
                                    height: 300,
                                    minWidth: 163,
                                }}
                            >
                                <img 
                                    src={`${IMAGE_BASE_URL_HD}${item.file_path}`}
                                    alt={item.file_path}
                                    
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </CustomTabPanel>
        </Box>
    )
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      sx={{
        color: 'blue',
        fontWeight: 'blod',
      }}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}




export default Media;