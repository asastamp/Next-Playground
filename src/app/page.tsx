"use client";

import Snowfall from "react-snowfall";

import MainMenu from "./_components/main-menu";
import Map from "./_components/map";

const snowflake1 = document.createElement("img");
snowflake1.src = "/hero/stamp.png";

export default function Home() {
  return (
    <div>
      <Snowfall radius={[30, 30]} images={[snowflake1]} />
      <MainMenu />
      <Map />
    </div>
  );
}
