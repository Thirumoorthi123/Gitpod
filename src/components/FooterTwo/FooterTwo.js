import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    fTwo:{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop:'2rem',
        backgroundColor:'#f9f9f9',
        gap:'35%',
        [theme.breakpoints.up('xs')]: {
            gap:'4px',
          },
          [theme.breakpoints.up('sm')]: {
            gap:'32px',
          },
          [theme.breakpoints.up('md')]: {
            gap:'19px',
          },
    },
    fLeft:{

    },
    fRight:{

    },
  }));
  export default function FooterTwo() {
    const classes = useStyles();
    return(
        <div className={classes.fTwo}>
            <div className={classes.fLeft}>
                left
            </div>
            <div className={classes.fRight}>
                right
            </div>
        </div>
    )}