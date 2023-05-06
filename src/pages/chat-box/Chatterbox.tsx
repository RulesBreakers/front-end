import React from "react";
import {container} from "./style";
import {Card, TextField, Typography} from "@mui/material";
import Discussion from "./Discussion_field";

const Chatterbox = () =>{
    
    const [values , setValue ]:any = React.useState();
    const handleSubmit = (e:any) => {
        e.preventDefault();
        setValue()
    }
    return (
    <div className="container" style={container}>
        <Card>
            <Typography align="center" >
                CHAT BOX
            </Typography>
            <form style={{
                border:0 ,
                display:"flex", 
                flexDirection:"row",
                justifyContent:"center",
                }}
                onSubmit={(e:any)=>handleSubmit(e)}
                >
                <Discussion message={values}/>
                <TextField 
                id="outlined-basic" 
                label="Confies toi" 
                variant="outlined" 
                />
           </form>
        </Card>
    </div>
    );
}

export default Chatterbox;