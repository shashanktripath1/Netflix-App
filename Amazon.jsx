import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Amazon= () =>
{
    return (
        <Card 
         key={Sdata[3].id}
         imgsrcs={Sdata[3].imgsrcs}
         title={Sdata[3].title}
         sname={Sdata[3].sname}
         link={Sdata[3].link}
         />);
};
export default Amazon;