import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Benefits from "../components/Benefits/Benefits";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </>
  );
};

export default Home;
