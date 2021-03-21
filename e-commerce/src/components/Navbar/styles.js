
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {

      flexGrow: 1
      
    },
    title: {

      flexGrow: 2,

    },
    icons:{

      display: "flex",
      justifyContent: "space-between",
      width: "7rem",
      marginRight: "8px"

    },

    search: {
      width: "20rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0rem 2rem",
      

    }
  }));

  export default useStyles;