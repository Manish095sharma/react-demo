import logo from './logo.svg';
import './App.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

import { Grid } from '@material-ui/core';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#9126EC" }}>

      <Grid style={{ minHeight: "100%", position: "relative" }} justify="center" alignItems="center" container>



        <LeftContainer></LeftContainer>
        <RightContainer></RightContainer>

      </Grid>

    </div>
  );
}

export default App;
