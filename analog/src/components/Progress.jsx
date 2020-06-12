import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  line:{
    marginLeft: "1rem"
  }
}));

export default function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" className={classes.line} />
    </div>
  );
}
