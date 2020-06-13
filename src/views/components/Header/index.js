import React from "react";
import "./styles.css";
import { Header } from "./styles";

const HeaderComponent = () => {
  return (
    <Header>
      <div className="menu-section container on">
        <img
          src="https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=454&name=Ativo%204.png%20454w,%20https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=907&name=Ativo%204.png%20907w,%20https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=1361&name=Ativo%204.png%201361w,%20https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=1814&name=Ativo%204.png%201814w,%20https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=2268&name=Ativo%204.png%202268w,%20https://blog.axur.com/hs-fs/hubfs/Ativo%204.png?width=2721&name=Ativo%204.png%202721w"
          alt="test"
        />
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
