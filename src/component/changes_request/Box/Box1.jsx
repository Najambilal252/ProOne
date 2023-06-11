import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import NAME from "./../../../common-component/name/Name.jsx";


export default function Sidebar() {
    
    return (
        <>
          <Typography sx={{position: "absolute",
                width: "422px",
                height: "43px",
                left: "375px",
                top: "75.71px",

                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "28.5557px",
                lineHeight: "43px",
                letterSpacing: "-0.02em",

                color: "#72AA83",}}>
                  You currently  have 3 requests
            </Typography>
            <Box sx={{display:"flex",flexDirection:"column",
              position:"absolute",height:"226px",top:"159px", marginLeft:"420px",width:"1000px",background:"#FFFFFF"}}>
                <NAME />
              <Box 
                    sx={{
                        position: "absolute",
                        width: "383px",
                        height: "43.5px",
                        left: "14px",
                        top: '135px',
                        borderStyle:"solid",
                        boder:"1px",
                        // boder:"1px solid",
                        borderColor:"#959595",
                        borderRadius:"24px 0px 0px 24px",
                        color:"#959595",
                        // textAlign:"left",
                        background: "#FDF307",
                        
                      }}>
                       <Typography sx={{textAlign:"left",paddingLeft:"30px",paddingTop:"10px"}}>RECEIVED</Typography>
                </Box>
              <Box 
                    sx={{
                        position: "absolute",
                        width: "199px",
                        height: "43.5px",
                        left: "399px",
                        top: '135px',
                        borderStyle:"solid",
                        boder:"1px",
                        // boder:"1px solid",
                        borderColor:"#959595",
                        borderRadius:"1px",
                        color:"#959595",
                        
                        background: "#FFFFFF",
                        
                      }}>
                        <Typography sx={{paddingTop:"10px"}}>NIGOTIATING</Typography>
                </Box>
                <Box 
                    sx={{
                        position: "absolute",
                        width: "350px",
                        height: "43.5px",
                        left: "599px",
                        top: '135px',
                        borderStyle:"solid",
                        boder:"1px",
                        // boder:"1px solid",
                        borderColor:"#959595",
                        borderRadius:"0px 24px 24px 0px",
                        color:"#959595",
                        
                        background: "#FFFFFF",
                        
                      }}>
                        <Typography sx={{paddingTop:"10px"}}>COMPLETING</Typography>
                </Box>
            </Box>
        </>
    );

}