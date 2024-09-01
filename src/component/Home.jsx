import React from "react";
import { Outlet } from "react-router-dom";
import Bodybanner from "./Homebanner/Bodybanner";       
import Movie from "./List/Movie";

function Home()
{
    return (
        <div>
            <Bodybanner/>
            <Movie/>
            <Outlet />
        </div>
    );
}

export default Home;