import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#9126EC",
        fontWeight: "bold",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: "white" }} position="static">
                <Toolbar>

                    <Grid justify="center" alignItems="center" container style={{ flex: 0.4, }}>

                        <Typography align="center" variant="h7" className={classes.title}>
                            LOGO
                        </Typography>
                    </Grid>

                    <Grid justify="center" alignItems="center" container style={{ flex: 0.6, }}>

                        <Button style={{
                            fontSize: 10,
                            color: "#9126EC",
                            fontWeight: "bold",
                        }}>Login</Button>
                        <Button style={{
                            fontSize: 10,
                            color: "#9126EC",
                            fontWeight: "bold",
                        }}>My Portfolio</Button>
                        <Button style={{
                            fontSize: 10,
                            color: "#9126EC",
                            fontWeight: "bold",
                        }}>Clients</Button>

                        <Button style={{
                            fontSize: 10,
                            color: "#9126EC",
                            fontWeight: "bold",
                        }} variant="outlined" >
                            Get in Touch
                            </Button>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
}
