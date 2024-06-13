import React from "react";
import Banner from "./../../components/banner/banner";
import Card from "./../../components/card/card";
import HomeData  from "../../data/datalogement.json";

import './home.css';

function Home() {
  return (
    <main className="home">
      <Banner txt="Chez vous, partout et ailleurs" page="home"/>
      <section className="home__container">
        {HomeData.map((homeData) => {
          return (
            <Card className="card" key={homeData.id} id={homeData.id} title = {homeData.title} cover = {homeData.cover} />
        );})}
        
      </section>
    </main>
  );
}
export default Home;