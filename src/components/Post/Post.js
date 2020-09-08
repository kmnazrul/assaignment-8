import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";
import { Button } from "@material-ui/core";
import userName from '../fakeData/fakeData.js';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
    maxHeight: 650,
    marginTop: "50px",
  },
  userImg: {
    width: "40px",
    height: "40px",
  },
  media: {
    height: 0,
    paddingTop: "32%",
    margin: theme.spacing(0, 3),
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardText: {
    textAlign: "center",
  },
  cardContent: {
    padding: "0 7%",
    marginTop: "20px",
  },
  cardAction: {
    position: "relative",
    padding: "8px 24px",
  },
  btn: {
    position: "absolute",
    right: "50px",
    bottom: "12px",
    backgroundColor: "crimson",
    color: "white",
    "&:hover": {
      backgroundColor: "indianRed",
    },
  },
}));

const Post = (props) => {
  const classes = useStyles();

  const { id, title, body } = props.post;
  const btnText = props.btnText;

  // generate user name
  const [usersName, setUsersName] = useState(userName);

  // generate random date posting date
  const randomDate = (start = new Date(2018, 0, 1), end = new Date()) => {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return `${monthName[month - 1]} ${day}, ${year}`;
  };
  const handleButton = btnText ? (
    <Link to={`/post/${id}`}>
      <Button className={classes.btn} variant="contained">
        See more
      </Button>
    </Link>
  ) : (
    <Link to={`/home`}>
      <Button className={classes.btn} variant="contained">
        See less
      </Button>
    </Link>
  );

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              className={classes.userImg}
              src={`https://randomuser.me/api/portraits/women/${id - 1}.jpg`}
              alt="user"
            />
          </Avatar>
        }
        title={`${usersName[id - 1]}`}
        subheader={randomDate()}
      />
      <CardMedia
        className={classes.media}
        image={`https://source.unsplash.com/collection/${id + 50}`}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: "crimson" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{ color: "dodgerBlue" }} />
        </IconButton>
        <IconButton aria-label="comment">
          <Link to={`/post/${id}`}>
            <CommentIcon
              style={{ verticalAlign: "bottom", color: "grey" }}
              color="secondary"
            />
          </Link>
        </IconButton>
        {handleButton}
      </CardActions>
    </Card>
  );
};

export default Post;
