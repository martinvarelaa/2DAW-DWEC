import {makeStyles} from '@material-ui/core';

export default makeStyles( (theme) => ({
    root: { 
        paddingTop: theme.spacing(7),
        marginBottom: theme.spacing(6)
    },
    cardGrid: {
        margin: theme.spacing(3),
        marginTop: theme.spacing(7)
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle:{
        textAlign  : "center",
        paddingTop : "2rem"
    },
    buttons:{
        marginTop: "1rem",
        marginBottom: "2rem"
        
    },
    cardImage:{
        width: "10rem",
        height: "10rem",
        display: "block",
        margin: 'auto',
        padding: '1rem'
    },
    cards:{
        minHeight: '24rem',
        backgroundColor: 'lightgrey'
    
    },
    cardDescription:{
        maxHeight: '2rem'
    },
    alignTitle:{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon:{
        width :'40px',
        paddingTop : "2rem"
    }

}));