import {makeStyles} from '@material-ui/core';


export default makeStyles( () => ({
    root : {
        
        height: '20rem',
        
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
        margin: 'auto',
        width: "10vh",
        height: "10vh"
    },
    title:{
        textAlign: "center"
    },
    description:{
        textAlign:'center'
    },
    price:{
        margin: "20px "
    }
}));

