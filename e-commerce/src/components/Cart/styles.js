import {makeStyles} from '@material-ui/core';

export default makeStyles( (theme) => (
{
    mainContainer:{
        marginTop : theme.spacing(7),
        display: 'flex',
        flexDirection: 'column',
        
    },
    gridOfProducts:{
        margin: theme.spacing(4)
    },
    cartDetails:{
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },button:{
        width: '10vh',
        alignSelf: 'flex-end'
    }
}
));


