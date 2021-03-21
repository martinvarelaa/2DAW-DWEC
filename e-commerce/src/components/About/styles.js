import {makeStyles} from '@material-ui/core';

export default makeStyles((theme)=>({
    mainContainer:{
        marginTop: theme.spacing(10)
    },bodyText:{
        margin: '2rem 3rem',
        textAlign: 'justify'
    }, cardActions: {
        margin: '2rem 3rem',
        display:'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }, title:{
        marginBottom: '2rem'
    },
    phoneNumber:{
        marginLeft: '1rem'
    }
}));