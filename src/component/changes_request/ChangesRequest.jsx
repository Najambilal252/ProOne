import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import NAME from "./../../common-component/name/Name.jsx";
import Side from "./../../common-component/sidebar/Sidebar.jsx";
import Boxone from "./Box/Box1.jsx";
import Holidaybox from "../../common-component/holidaybox/Holidaybox.jsx";
import Link from '@mui/material/Link';

export default function ChangesRequest() {
  
    return (
    <>
    <Grid sx={{width:"100%",display:"flex",flexDirection:"row",background: "#D9D9D9", position:"absolute",}}>
        <Side />
        <Grid sx={{height:"1117px",width:"100%",marginRight:"0px"}}>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Boxone />
            {/* second */}
          <Box sx={{position:"absolute",height:"526px",top:"446px", marginLeft:"420px",width:"1000px",background:"#FFFFFF",borderRadius:"54px"}}>
            <NAME />
            <Link href="#">
              <Button sx={{position: "absolute",
                      width: "630px",
                      height: "48px",
                      left: "41px",
                      top: "129px",
                      textAlign:"left",
                      background: "#44A16F",
                      borderRadius: "24px",
                      '&:hover': {
                        background: '#959595'
                      }}}>
                        <Typography sx={{position:"absolute",left:"32px",fontFamily: 'Lato',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "16.096px",
                                lineHeight: "19px", letterSpacing: "-0.05em",
                                color: "#FFFFFF",}}>
                            COMPLETED
                        </Typography>
                
              </Button>
              </Link>
              <Box sx={{display:"flex",flexDirection:"row"}}>
                  <Box sx={{position: "absolute",
                      width: "275px",
                      height: "220px",
                      left: "41px",
                      top: "239px",

                      background: "#F5F4F4",
                      border: "1px solid rgba(0, 0, 0, 0.18)",
                      borderRadius: "10px",
                      }}>
                    
                    <Holidaybox />   
                    </Box>
                    <Box sx={{position: "absolute",
                      width: "275px",
                      height: "220px",
                      left: "363px",
                      top: "239px",

                      background: "#F5F4F4",
                      border: "1px solid rgba(0, 0, 0, 0.18)",
                      borderRadius: "10px"}}>
                      
                      <Holidaybox />
                    </Box>
                    <Box sx={{position: "absolute",
                      width: "275px",
                      height: "220px",
                      left: "690px",
                      top: "239px",

                      background: "#F5F4F4",
                      border: "1px solid rgba(0, 0, 0, 0.18)",
                      borderRadius: "10px"}}>

                      <Holidaybox />
                    </Box>
    
              </Box>
              <Box sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  width: "92px",
                  height: "82px",
                  left: "945px",
                  top: "520px",
                  }}>
                  <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="69" cy="69" r="68.5" fill="#44A16F" stroke="#69AC80"/>
                  </svg>
              </Box>
              <Box sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  width: "92px",
                  height: "82px",
                  left: "955px",
                  top: "550px",
                  }}>
                  <svg width="64" height="51" viewBox="0 0 64 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M61.5672 19.9969C62.1359 19.9969 62.5625 19.9969 63.4156 19.9969C60.8562 8.73281 47.6328 0 31.85 0C14.3609 0.126563 0 10.6313 0 23.6672C0 31.0078 4.26562 37.2094 11.0906 41.5125C11.6594 41.8922 11.9437 42.3984 11.9437 43.1578C11.9437 43.2844 11.8016 43.5375 11.8016 43.6641C11.2328 45.4359 10.3797 48.3469 10.3797 48.4734C9.95313 48.7266 9.95312 48.8531 9.95312 49.2328C9.95312 49.7391 10.3797 50.1187 11.0906 50.1187C11.2328 50.1187 11.5172 49.9922 11.6594 49.9922L18.6266 46.4484C19.0531 46.3219 19.7641 46.0688 20.475 46.0688C20.6172 46.0688 21.0438 46.1953 21.4703 46.1953C24.7406 47.0812 28.2953 47.4609 31.85 47.4609C32.4187 47.4609 32.8453 47.4609 33.6984 47.4609C33.1297 45.6891 32.7031 43.6641 32.7031 41.7656C32.7031 29.3625 45.5 19.9969 61.5672 19.9969ZM42.5141 12.2766C44.9312 12.2766 46.7797 14.0484 46.7797 16.0734C46.7797 18.0984 44.7891 19.8703 42.5141 19.8703C40.2391 19.8703 38.2484 18.0984 38.2484 16.0734C38.2484 14.0484 40.0969 12.2766 42.5141 12.2766ZM21.1859 19.9969C18.7687 19.9969 16.9203 18.225 16.9203 16.2C16.9203 14.175 18.9109 12.4031 21.1859 12.4031C23.4609 12.4031 25.4516 14.175 25.4516 16.2C25.4516 18.225 23.6031 19.9969 21.1859 19.9969Z" fill="white"/>
                  </svg>
              </Box>
        </Box>
          
      </Box>
    </Grid>
  </Grid>
    </>
  );
}