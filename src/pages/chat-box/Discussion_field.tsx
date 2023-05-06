import React, { Dispatch, SetStateAction } from "react";
import { IDiscussion } from "./interface";

const Discussion = (disc:IDiscussion ) =>{
    const mess:[string, Dispatch<SetStateAction<string>>] = React.useState(disc.message);
    return(
    <>
        <p>{mess[0]}</p> 
    </>
    )
};

export default Discussion;