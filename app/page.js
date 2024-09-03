"use client";
import { useState } from "react";
import Apps from "./components/apps/Apps";
import Dashborad from "./components/dashboard/Dashborad";
import MainNav from "./components/navs/MainNav";
import NavTwo from "./components/navs/NavTwo";

const Home = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <main className="bg-black flex flex-col items-center justify-center h-[100vh] w-full main-bg bg-no-repeat bg-cover bg-center">
      {active === "apps" ? (
        <Apps />
      ) : active === "dashboard" ? (
        <div className="flex items-center justify-center gap-[40px]">
          <MainNav />
          <div className="flex flex-col items-center justify-center">
            <Dashborad />
            <NavTwo />
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </main>
  );
};
export default Home;
