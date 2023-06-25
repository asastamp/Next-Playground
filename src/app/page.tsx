"use client";

import Snowfall from "react-snowfall";

import MainMenu from "./_components/main-menu";
import Map from "./_components/map";
import Chat from "./_components/chat";
import Header from "./_components/header";

export default function Home() {
  return (
    <div>
      <Snowfall style={{ height: 1800 }} />
      <Header />
      <MainMenu />
      <Map />
      <Chat />
    </div>
  );
}
