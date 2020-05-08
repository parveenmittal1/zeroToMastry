import React,{Component} from 'react';
import Card from "./Card";
const CardList=({robots})=>{
    const cardArray=robots.map((user, index)=>{
    return(
        <Card key={index}
              id={robots[index].id}
              name={robots[index].name}
              username={robots[index].username}
              email={robots[index].email} />)
});
    return(
        <div>
        {cardArray}
        </div>
    );

}

export default CardList;