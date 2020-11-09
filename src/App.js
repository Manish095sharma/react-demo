import logo from './logo.svg';
import './App.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import AppHeader from "./AppHeader"
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#9126EC" }}>

      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <AppHeader></AppHeader>


        <Grid style={{ height: "100%", overflow: "hidden" }} justify="center" alignItems="center" container>



          <LeftContainer></LeftContainer>
          <RightContainer></RightContainer>


        </Grid>
      </div>

    </div>
  );
}

export default App;
