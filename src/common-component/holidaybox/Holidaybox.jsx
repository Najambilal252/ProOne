import React from "react";
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Holidaybox() {

    return (
    <>
        <Box 
            // component="Img"
            sx={{position: "absolute",
            
            width: "48px",
            height: "53px",
            left: "113px",
            top: "22px",}}>
            <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336" stroke="#85C371" stroke-width="5" stroke-linecap="round"/>
            </svg>

            </Box>
            <Typography sx={{position: "absolute",
            width: "105px",
            height: "220px",
            left: "85px",
            top: "85px",
            fontFamily: 'poppins',
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: "19.12px",
            lineHeight: "29px",
            /* identical to box height */

            letterSpacing: "-0.01em",

            color: "#85C371",}}>HOliday Inn</Typography>
            <Box sx={{boxSizing: "border-box",

                position: "absolute",
                width: "275px",
                height: "93px",
                left: "0px",
                top: "127px",
                background: "#EEEEEE",
                border: "1px solid rgba(0, 0, 0, 0.18)",
                boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px"}}>
                <Typography sx={{
                position: "absolute",
                width: "212px",
                height: "21px",
                left: "5px",
                top: '12.12px',
                
                fontFamily: 'Lato',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "17.5894px",
                lineHeight: "21px",
                letterSpacing: "-0.07em",
                
                color: "#959595",
                
                }}>
                1.5 miles away from joblloction.
                </Typography>
                <Typography sx={{
                position: "absolute",
                width: "84px",
                height: "23px",
                left: "0px",
                top: '43.74px',
                
                fontFamily: 'poppins',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "15.2394px",
                lineHeight: "23px",
                letterSpacing: "-0.07em",
                
                color: "#959595",
                
                }}>
                Singles: $120
                </Typography>
                <Typography sx={{
                position: "absolute",
                width: "92px",
                height: "23px",
                left: "0px",
                top: '61.74px',
                
                fontFamily: 'poppins',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "15.2394px",
                lineHeight: "23px",
                letterSpacing: "-0.07em",
                
                color: "#959595",
                
                }}>
                Doubles: $145
                </Typography>
                <Link href="#">
                <Button sx={{
                    position: "absolute",
                    width: "126px",
                    height: "40px",
                    left: "132px",
                    top: '44.74px',
                    borderRadius:"10px",
                    color:"#FFFFFF",
                    
                    background: "#44A16F",
                    '&:hover': {
                        background: '#959595'
                    }
                }}>
                Book now
                </Button>
                </Link>
            </Box>
        </>
        );

}