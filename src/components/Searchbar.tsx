import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    
    const [query, setQuery] = useState("");

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "white" }}>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="搜索电影 / 剧集"
                    value={query}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "white", // 输入文字颜色
                            "& fieldset": {
                                borderColor: "gray",   // 默认边框颜色
                            },
                            "&:hover fieldset": {
                                borderColor: "gray",   // hover 时边框
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "white",   // focus 时边框
                            },
                            },
                            "& .MuiInputBase-input::placeholder": {
                            color: "gray",
                            opacity: 1,              // 让 placeholder 完全可见
                        },
                    }}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch(query);
                        }
                    }}
                />
                <IconButton onClick={() => onSearch(query)} sx={{ color: "white" }} >
                    <SearchIcon />
                </IconButton>
            </div>
        
        </>
    )
}

export default SearchBar;