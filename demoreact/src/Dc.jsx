import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const DC = () => {
    return (
        <Card 
        key={Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        disp={Sdata[5].disp}
        link={Sdata[5].link}
      />)
}

export default DC;