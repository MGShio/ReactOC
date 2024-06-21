import React from "react";
import Banner from './../../components/banner/banner';
import Dropdown from './../../components/dropdown/dropdown';
import AboutData  from "../../data/dataabout.json";
import "./about.sass"

export default function About() {
  return (
    <main className="about">
      <Banner txt="" page="about"/>
      {AboutData.map((aboutData) => {
        return (
          <Dropdown className="dropdown" key={aboutData.title} title={aboutData.title} content={aboutData.description} page="about"/>
      );})}
    </main>
  );
}