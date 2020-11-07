import React, { useReducer } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash"
import { useDispatch } from 'react-redux'
import { select_category } from "./redux/actions/SelectCategoryAction"
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
function LeftContainer(props) {
    const classes = useStyles();
    const dispatch = useDispatch()



    function handleChange(itemIdx, subItemIdx, isSelected) {

        let array = _.cloneDeep(props.categories);

        array[itemIdx].category_itmes[subItemIdx].selected = isSelected


        dispatch(select_category(array))

    }


    return (
        <Grid direction="column" container justify="center" alignItems="center" style={{ width: "30%", marginRight: 20, minHeight: "70vh", overflow: "scroll", backgroundColor: "white" }}>



            {Array.isArray(props.categories) ?
                props.categories.map((iten, idx) => {
                    return <Grid direction="column" key={`item${idx}`} justify="center" alignItems="center" container style={{ backgroundColor: "white" }} >
                        <Typography align="left" style={{ width: "90%" }} > {iten.categoryName} </Typography>

                        <List className={classes.root}>
                            {iten.category_itmes.map((value, subIdx) => {
                                const labelId = value.name

                                return (
                                    <ListItem key={value} role={undefined} dense button onClick={() => handleChange(idx, subIdx, !value.selected)}>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={value.selected}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={labelId} />
                                    </ListItem>
                                );
                            })}
                        </List>


                    </Grid>


                })

                : null}


        </Grid >
    )
}


const mapStateToProps = (state) => ({
    categories: state.selected_categories.selected_categories,
});


export default connect(mapStateToProps)(LeftContainer);

