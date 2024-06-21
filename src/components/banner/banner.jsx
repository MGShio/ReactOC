import React from "react";
import "./banner.sass";

function Banner({ page, txt }) {
  // Splitting the txt prop into words
  const words = txt.split(",");
  const firstPart = words[0];
  const lastPart = words[words.length - 1];

  return (
    <section className={"banner banner--mobile banner--" + page}>
      <div>
        {/* Displaying the first part followed by a comma if txt is not empty */}
        {txt && <span className="banner__txt">{firstPart + ","}</span>}
        {/* Displaying the last part */}
        <span className="banner__txt">{lastPart}</span>
      </div>
    </section>
  );
}

export default Banner;