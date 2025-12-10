import { Typography, Box } from "@mui/material";
import { type TVDetail } from "../types/moive";
import { useEffect, useState } from "react";
import { type Keyword } from "../types/moive";
import getTVKeywords from "../api/misc/tv/getTVKeywords";

const MovieInfoSidebar = (props: {
  Id: number;
  detail: TVDetail;
}) => {

  const [keywords, setKeywords] = useState<Keyword[]>([]);

  useEffect(() => {
    getTVKeywords(props.Id).then((data) => {
      setKeywords(data.keywords ?? []);
    });
  }, [props.Id]);



  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          justifyItems: "left",
          textAlign: "left",
        }}
      >
        <Box sx={{ marginBottom: 2, marginTop: 5 }}>
          <Typography variant="h6">原名</Typography>
          <Typography component="h6" sx={{ color: "text.secondary" }}>
            { props.detail.original_name }
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">状态</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.detail.status === "Returning Series" ? "回归剧" : "已完结"}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">默认语言</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.detail.original_language.toUpperCase()}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="h6">类型</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.detail.type}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography component="h6" variant="h6">
            关键词
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              gap: 0.5,
              textAlign: "center",
            }}
          >
            {keywords.map((keyword) => (
              <KeyWord key={keyword.id} keyWord={keyword} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const KeyWord = ({ keyWord }: { keyWord: Keyword }) => {
  return (
    <Box
      sx={{
        padding: 0.5,
        pr: 1.5,
        pl: 1.5,
        border: "1px solid gray",
        alignItems: "center",
        justifyItems: "center",
        borderRadius: 1,
        backgroundColor: "rgba(229, 229, 229, 0.45)",
        color: "text.secondary",
        mr: 0.2,
      }}
    >
      <Typography sx={{ fontSize: "0.875rem" }}>{keyWord.name}</Typography>
    </Box>
  );
};

export default MovieInfoSidebar;
