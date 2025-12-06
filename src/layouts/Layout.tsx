import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ margin: "4rem" }}>
        <Outlet></Outlet>
      </Box>
    </>
  );
}
