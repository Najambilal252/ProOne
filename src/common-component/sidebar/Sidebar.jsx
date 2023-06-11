import React from "react";
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Sidebar() {

    return (
    <>
        <Grid sx={{position: "absolute",width:"296px",height:"1117px",background:"#FFFFFF",boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.25)"}}>
          <Box sx={{width:"119px",height:"43px",top:"37.08px",left:"38px",position: "absolute"}}>
            <Typography sx={{font:"lato",fontWeight:"800",fontStyle:"italic",fontSize:"35.48px",lineHeight:"42.58px"}}>LODGN</Typography>
          </Box>
          <Box sx={{display:"flex",flexDirection:"column"}}>
          <Link href="#"> 
            <Typography sx={{position: "absolute",width: "190px",height: "34px",left: "5px",
                            top: "146.95px",fontFamily: 'Poppins',fontStyle: "normal",fontWeight: "600",
                            fontSize: "22.8024px",lineHeight: "34px",letterSpacing: "-0.02em",color: "#72AA83",'&:hover': {
                              color: '#72AA83'
                            }}}>
                            Current requests
            </Typography>
          </Link>
            <Box sx={{position: "absolute",width: "236px",height: "0px",left: "20px",top: "200.5px",
                      border: "1px solid rgba(0, 0, 0, 0.29)"}} />
            <Link href="#"> 
            <Typography sx={{position: "absolute",width: "158px",height: "33px",left: "5px",
                            top: "227.95px",fontFamily: 'Poppins',fontStyle: "normal",fontWeight: "600",
                            fontSize: "22.8024px",lineHeight: "34px",letterSpacing: "-0.02em",color: "#494949",'&:hover': {
                              color: '#72AA83'}}}>
                            Ongoing stays
            </Typography>
            </Link>
            <Box sx={{position: "absolute",width: "236px",height: "0px",left: "20px",top: "282px",
                      border: "1px solid rgba(0, 0, 0, 0.29)"}} />
            <Link href="#"> 
            <Typography sx={{position: "absolute",width: "156px",height: "34px",left: "5px",
                            top: "306px",fontFamily: 'Poppins',fontStyle: "normal",fontWeight: "600",
                            fontSize: "22.8024px",lineHeight: "34px",letterSpacing: "-0.02em",color: "#494949",'&:hover': {color: '#72AA83'}}}>
                            Previous stays
            </Typography>
            </Link>
            <Box sx={{position: "absolute",width: "236px",height: "0px",left: "20px",top: "362.5px",
                      border: "1px solid rgba(0, 0, 0, 0.29)"}} />
            <Link href="#"> 
            <Typography sx={{position: "absolute",width: "84px",height: "34px",left: "7px",
                            top: "385px",fontFamily: 'Poppins',fontStyle: "normal",fontWeight: "600",
                            fontSize: "22.8024px",lineHeight: "34px",letterSpacing: "-0.02em",color: "#494949",'&:hover': {color: '#72AA83'}}}>
                            Report
            </Typography>
            </Link>
            <Box sx={{position: "absolute",width: "236px",height: "0px",left: "20px",top: "442px",
                      border: "1px solid rgba(0, 0, 0, 0.29)"}} />
            <Link href="#">
            <Button sx={{
              position: "absolute",
              width: "200px",
              height: "70px",
              left: "25px",
              top: "884px",
              color:"#FFFFFF",
              background: "linear-gradient(180deg, #48AF78 0%, #42996B 100%)",
                        borderRadius: "10px",
                        '&:hover': {
                          background: '#959595'
                        }}}>
                    <Typography>
                        Log-Out
                    </Typography>
            </Button>
            </Link>
            <Typography sx={{
              position: "absolute",
              width: "76px",
              height: "21px",
              left: "80px",
              top: "966px",
              
              fontFamily: 'Lato',
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "17.5894px",
              lineHeight: "21px",
              letterSpacing: "-0.07em",
              
              color: "#494949",
              
            }}>
                Help-Desk
            </Typography>
            <Typography sx={{
              position: "absolute",
              width: "100px",
              height: "21px",
              left: "65px",
              top: "992px",
              
              fontFamily: 'Lato',
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "17.5894px",
              lineHeight: "21px",
              letterSpacing: "-0.07em",
              
              color: "#494949",
              
            }}>
              786-874 9988
            </Typography>
  
          </Box>
        </Grid>
        </>
    );

}