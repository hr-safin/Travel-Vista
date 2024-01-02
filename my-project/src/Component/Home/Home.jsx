import React from "react";
import { Banner } from "./Banner/Banner";
import { About } from "../About/About";

export const Home = () => {
  return (
    <div className="min-h-screen ">
        <Banner />
        <About />
    </div>
  );
};
