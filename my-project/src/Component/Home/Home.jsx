import React from "react";
import { Banner } from "./Banner/Banner";
import { About } from "../About/About";
import Galary from "../Galary/Galary";
import Popular from "../Popular/Popular";

export const Home = () => {
  return (
    <div className="min-h-screen ">
        <Banner />
        <About />

        <Galary />
        <Popular />
    </div>
  );
};
