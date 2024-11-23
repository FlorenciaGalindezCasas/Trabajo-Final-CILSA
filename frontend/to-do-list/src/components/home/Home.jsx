import React from "react";
import Main from "../Main/Main";
import Menu from "../menu/Menu";

function Home() {
  return (
    <div className="d-flex">
      <Menu />
      <Main />
    </div>
  );
}

export default Home;
