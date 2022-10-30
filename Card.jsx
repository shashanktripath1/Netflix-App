import React from "react";
import Image from "./Image";
function Card(props)
{
    // console.log(props);
    return(
        <>
    <div className="cards">
    <div className='card'>
       <Image imgsrcs={props.imgsrcs}/>
        <div className='card__info'>
            <span className='card__category'>{props.title} </span>
            <h3 className='card__title'>{props.sname}</h3>
            <a href={props.link} target="blank">
                <button>Watch Now</button>
            </a>
        </div>
    </div>
    </div>
  
</>

 );
}
export default Card;
