import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({

   root:{
       marginTop: theme.spacing(7),
       display:'flex',
       margin:'auto',
       width: '40rem'
       
   },
   title:{
    marginBottom: '2vh'     
   },
   card:{
       padding: '2rem 10rem',
       backgroundColor: '#DCDCDC',
       alignContent: 'flex-start',
       
   },form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
   },input:{
       marginBottom: '3vh'
   },cardActions: {
       display:'flex',
       justifyContent: 'center'
   }

}));