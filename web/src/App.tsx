import React from 'react';
import { getServerMessage } from './core/api';
import logo from './assets/logo.png';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import "@fontsource/black-ops-one"
import "@fontsource/saira-condensed"

const App = () => {

  const [serverMessage, setServerMessage] = React.useState("contacting server...");

  React.useEffect(() => {
    getServerMessage().then(msg => setServerMessage(msg));
  }, [])

  const TopDiv = styled("div")({
    height: "50vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  })

  const LowerDiv = styled("div")({
    height: "50vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  })

  
  return (
    <div style={{fontFamily: "Saira Condensed"}}>
      <TopDiv>
        <img src={logo} />
        <Typography variant="h2" sx={{fontFamily: "Black Ops One"}}>Gymbro</Typography>
        <Typography variant="body1" sx={{fontFamily: "Saira Condensed", fontSize: "1.3em"}}>{serverMessage}</Typography>
      </TopDiv>
      <LowerDiv>
        <Button variant="outlined" size="large" sx={{color: "white", borderWidth: "2px", borderColor: "white", fontFamily: "Saira Condensed"}}>Let's go</Button>
      </LowerDiv>
    </div>
  );
}

export default App;
