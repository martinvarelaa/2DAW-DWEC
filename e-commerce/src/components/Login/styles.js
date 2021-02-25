import {makeStyles} from '@material-ui/core';

export default makeStyles( (theme) =>({

    toolbar : theme.mixins.toolbar,
    content : {
        width: '50%',
        padding : theme.spacing(2)
    },
    control:{
        display: 'flex',
        flexDirection : 'column'
    }

}));