import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainSty:{
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: '320px',
      width: '100%',
      maxWidth: '1280px',
      margin: '0px auto',
      paddingRight: '8px',
    },
  }));
  export default function ContentTwo() {
    const classes = useStyles();
    return(
    <h4>test</h4>
    )}