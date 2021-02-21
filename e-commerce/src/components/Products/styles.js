import {makeStyles} from '@material-ui/core';

export default makeStyles( (theme) =>({

    toolbar : theme.mixins.toolbar,
    content : {
        padding : theme.spacing(2)
    }

}));