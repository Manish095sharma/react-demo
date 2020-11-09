import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash"
import IconButton from '@material-ui/core/IconButton';

import Clear from '@material-ui/icons/Clear';

import { useDispatch } from 'react-redux'
import { select_category } from "./redux/actions/SelectCategoryAction"
import { connect } from "react-redux";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
    root: {

        //width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
function LeftContainer(props) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [selectedItems, setselectedItems] = useState([])


    useEffect(() => {


        let newArray = []

        for (let i = 0; i < props.categories.length; i++) {

            for (let j = 0; j < props.categories[i].category_itmes.length; j++) {

                if (props.categories[i].category_itmes[j].selected === true) {

                    let index = newArray.findIndex((item) => item.categoryName == props.categories[i].categoryName)
                    if (index == -1) {
                        newArray.push({

                            categoryName: props.categories[i].categoryName,
                            _id: props.categories[i]._id,


                            category_itmes: [
                                { ...props.categories[i].category_itmes[j] }
                            ]


                        })
                    }
                    else {
                        newArray[index].category_itmes.push({ ...props.categories[i].category_itmes[j] })
                    }


                }

            }


        }



        setselectedItems(newArray)

    }, [
        props.categories
    ])


    function handleChange(itemIdx, subItemIdx) {

        let array = _.cloneDeep(props.categories);



        let index = array.findIndex((item) => item._id === itemIdx)
        let subIndex = array[index].category_itmes.findIndex((item) => item._id === subItemIdx)


        array[index].category_itmes[subIndex].selected = false


        dispatch(select_category(array))

    }


    return (
        <div style={{ width: "35%", height: "75%", overflow: "scroll", backgroundColor: "white" }}>



            {selectedItems.length > 0 ?

                selectedItems.map((iten, idx) => {
                    return <Grid direction="column" key={`item${idx}`} style={{ backgroundColor: "white", padding: 10 }} >
                        <Typography style={{ marginLeft: 15, fontWeight: "400" }} align="left" > {iten.categoryName} </Typography>
                        <List style={{ padding: 5, margin: 0, marginLeft: 10 }} className={classes.root}>
                            {iten.category_itmes.map((value, subIdx) => {
                                const labelId = value.name

                                return (
                                    <ListItem style={{ backgroundColor: "#e5e5e5", marginBottom: 10 }} key={value} role={undefined} dense button >
                                        <ListItemText style={{ color: "#989898" }} id={labelId} primary={labelId} />

                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => handleChange(iten._id, value._id)} edge="end" aria-label="comments">
                                                <Clear />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>

                                );
                            })}
                        </List>


                    </Grid>


                })

                : <Grid container style={{ height: "100%" }} justify="center" alignItems="center" container  >

                    <Typography style={{ color: "#989898" }}>No value Selected</Typography>
                </Grid>}


        </div >
    )
}


const mapStateToProps = (state) => ({
    categories: state.selected_categories.selected_categories,
});


export default connect(mapStateToProps)(LeftContainer);

