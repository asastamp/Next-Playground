"use client";

import Snowfall from "react-snowfall";

import MainMenu from "./_components/main-menu";
import Map from "./_components/map";
import { useEffect, useState } from "react";

export default function Home() {
  const [image, setImage] = useState();

  useEffect(() => {
    const snowflake1 = document.createElement("img");
    snowflake1.src = "/hero/stamp.png";
    setImage(snowflake1 as any);
  });

  return (
    <div>
      {image && (
        <Snowfall
          radius={[10, 50]}
          wind={[1, 10]}
          style={{ height: 1800 }}
          images={[image]}
        />
      )}
      <MainMenu />
      <Map />
    </div>
  );
}
