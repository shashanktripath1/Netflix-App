// Challenge 5
// import React from "react";
// import  ReactDOM  from "react-dom";
// import Heading  from "./Heading";
// import Paragraph from "./Paragraph";
// import OrderedList from "./OrderedList";
// function App()
// {
//   return(
//     <>
//         <Heading></Heading>
//         <Paragraph></Paragraph>
//         <OrderedList></OrderedList>
//     </>

//   );
// }
// export default App;
 

//challenge 6
// import React from 'react';
// import ReactDOM from 'react-dom';
//  function App()
//  {
//     let currDate=new Date(2020,5,5,1);//YYYY-MM-DD-Hour
// currDate=currDate.getHours();
// let greeting='';
// const cssStyle={};
// if(currDate>=1&&currDate<12)
// {
//     greeting='Good Morning';
//     cssStyle.color='green';
// } 
// else if(currDate>=12&&currDate<19){
//     greeting='Good AfterNoon';
//     cssStyle.color="Orange";
// }
// else{
//     greeting='Good Night';
//     cssStyle.color="Black";
//  }
//  return(
//     <>
//          <div>
//         <h1>Hello sir , <span style={cssStyle}>{greeting}</span></h1>
//       </div></>

//  );
// }
// export default App;


//import export magic
// const  coder=" Patel is a good boy";
// const favProg="react js";
// function Myname(){
//     let name1 ='saumil';
//     return name1;
// }
// export default coder;
// export  {favProg,Myname}


//Challenge Calculator
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {add,sub,div,multiply} from './Calc';
// function App1()
// {
//     return (<>
// <ol>
//         <li>Simple Calculator</li>
//         <li>{add(40,3)}</li>
//         <li>{sub(40,3)}</li>
//         <li>{div(40,3)}</li>
//         <li>{multiply(40,3)}</li>
//     </ol>
//     </>);
// }
// export default App1;




//netlfix app
import React from 'react';
import Amazon from './Amazon';
import Card from './Card';
import Netflix from './Netflix';
import Sdata from "./Sdata";

const favSeries="Amazon";

// const FavS=()=>{
// if(favSeries==='netflix')
// {
//      return(<Netflix />);

// }
// else{
//     return (<Amazon/>);}
// };

const App=()=>(
    <>
    <h1 className='heading_style'>List of TOP netflix web Series</h1>
 
{Sdata.map((val,index)=>
{console.log(index);
    return (
       <Card 
        key={val.id}
        imgsrcs={val.imgsrcs}
        title={val.title}
        sname={val.sname}
        link={val.link}
    />);})} 
        
                {/* <FavS /> */}
    {/* { favSeries==='netflix'?<Netflix />:<Amazon/>} */}
                    </>
);
export default App;