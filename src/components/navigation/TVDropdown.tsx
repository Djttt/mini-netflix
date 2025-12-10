import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

export default function TVDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <div onMouseLeave={handleClose}>
      <NavLink
        to="/tv"
        onMouseEnter={handleMouseEnter}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        TV shows
      </NavLink>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem component={NavLink} to="/tv">
          热门
        </MenuItem>
        <MenuItem component={NavLink} to="/tv/airing-today">
          今日播出
        </MenuItem>
        <MenuItem component={NavLink} to="/tv/top-rated">
          高分
        </MenuItem>
        <MenuItem component={NavLink} to="/tv/on-the-air">
          电视播放
        </MenuItem>
      </Menu>
    </div>
  );
}