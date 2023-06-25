"use client";

import Snowfall from "react-snowfall";

import Header from "./_components/header";
import Hero from "./_components/hero";
import Map from "./_components/map";
import Chat from "./_components/chat";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Map />
      <Chat />

      <Snowfall />
    </div>
  );
}
