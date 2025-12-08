import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

export default function MovieDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <div onMouseLeave={handleClose}>
      <NavLink
        to="/movies"
        onMouseEnter={handleMouseEnter}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Movie
      </NavLink>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem component={NavLink} to="/movie">
          Popular
        </MenuItem>
        <MenuItem component={NavLink} to="/movie/now-playing">
          Now Playing
        </MenuItem>
        <MenuItem component={NavLink} to="/movie/top-rated">
          Top Rated
        </MenuItem>
        <MenuItem component={NavLink} to="/movie/upcoming">
          Upcoming
        </MenuItem>
      </Menu>
    </div>
  );
}