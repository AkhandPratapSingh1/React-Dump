import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Marvel = () => {
    return (
        <Card 
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        disp={Sdata[1].disp}
        link={Sdata[1].link}
      />)
}

export default Marvel;