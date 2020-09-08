import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 650,
        maxHeight: 450,
        marginTop: theme.spacing(3),
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    userImg: {
        width: '40px',
        height: '40px'
    }
}));

const Comment = (props) => {
    const classes = useStyles();
    const { name, id, body } = props.comment;
    // random date generator
    const randomDate = (start = new Date(2018, 0, 1), end = new Date()) => {
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return `${monthName[month - 1]} ${day}, ${year}`;
    }

    // generate 2 digit id
    const randomId = () => Math.round(Math.random() * 99) ;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>
                            <img className={classes.userImg} src={`https://randomuser.me/api/portraits/men/${randomId()}.jpg`} alt="" />
                        </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography component="h6">{name}</Typography>
                        <Typography variant="caption" display="block" color="textSecondary" gutterBottom>{randomDate()}</Typography>
                        <br/>
                        <Typography variant="body1" component="p">{body}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Comment;