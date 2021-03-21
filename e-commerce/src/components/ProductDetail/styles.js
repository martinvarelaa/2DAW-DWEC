import { makeStyles } from '@material-ui/core';

export default makeStyles ( ( theme ) => (
{
    mainContainer: {

        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.spacing(10),
        
    },
    imageContainer: {

        display: 'grid',
        
    
    },
    image:{

        width: "20vh",
        minWidth: '10vh',
        display: 'block',
        margin: ' 5vh auto',
        maxWidth: '10vh'

    },
    card:{

        margin: '4vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    title:{

        paddingTop: '3vh'

    },
    cardActions: {

        display : 'flex',
        justifyContent: 'center',
        flexDirection: 'column ',
        marginTop: '4rem'

    },
    cardListItem:{

        margin: "2vh",
        display:'flex', 
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: "1rem 1rem"

    },

    price:{
        marginTop: '4vh'
    },
    stock:{
        margin: "2rem auto",
        bottom: "0px",
        color: "blue"
    },

}
));