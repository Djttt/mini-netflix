import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ margin: "4rem" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
