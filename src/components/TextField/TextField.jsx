import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextFields from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    minWidth: 300,
  },
}));

export default function TextField({ label, ...props }) {
  const classes = useStyles();

  return (
    <TextFields
      id="outlined-basic"
      label={label}
      variant="outlined"
      className={classes.root}
      {...props}
    />
  );
}
