import {makeStyles} from '@material-ui/core';


export default makeStyles( () => ({
    root : {
        maxWidth : '100%',
    }, 
    cardActions: {
        display : 'flex',
        justifyContent: 'center'
    }, 
    cardContent: {
        display : 'flex',
        justifyContent: 'space-evenly',
    },
    img:{
        width: "50%",
        margin: 'auto'
    },
    title:{
        margin: 'auto',
        width: '50%'
    },
    description:{
        textAlign:'center'
        }
}));

