import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  link: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none'
  }
}));

const NoMatch = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{height:'100vh'}}>
        <Typography variant="h1" component="h1" style={{ textAlign: 'center', marginTop: '100px', color: 'white' }}>Post Not Found</Typography>
        <Typography variant="h3" component="h3" style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>Link is Broken or This Post  is Deleted by User</Typography>
        <Link className={classes.link} to='/'>
          <Button variant="contained" color="secondary">Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;