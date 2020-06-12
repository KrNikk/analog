import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { TimesContext } from "../definitions/Times.context";
import Minutes from '../images/minutes.svg';
import Film from "../images/film.svg";
import ASA from "../images/asa.svg";
import PushPull from "../images/pushPull.svg";
import Developer from "../images/developer.svg";
import Dilution from "../images/dilution.svg";

const useStyles = makeStyles({
  root: {
    width: "22rem",
    height: "auto",
    margin: "3rem 2rem 2rem 2rem",
    textAlign: "left",
    fontFamily: 'Abel', 
    boxShadow: "8px 12px 13px -6px rgba(0,0,0,0.75)",
    backgroundColor: "#E8E9EB"
  },
  title: {
    fontSize: 14,
    fontFamily: 'Abel', 
    color: "black"
  },
  pos: {
    marginBottom: 12,
    fontFamily: 'Abel'
  },
  img: {
    width: "2rem",
  },
  span: {
    display: "inline-flex",
    fontFamily: 'Abel'
  },
  row: {
    fontWeight: "bold",
    fontFamily: 'Abel'
  },
  rowValue:{
    marginLeft: "2rem",
    fontFamily: 'Abel'
  },
  del:{
    flexDirection: "row-reverse",
    fontFamily: 'Abel'
  },
  typography:{
    fontSize: "2rem",
    backgroundColor: "#D8D9DB",
    fontFamily: 'Abel', 
    textAlign: "center"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const { analog, fetchData } = React.useContext(TimesContext);

  function deleteData(id) {
    return fetch(`/times/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
    }).then(fetchData);
  }

  return (
      <>{analog.map((a) => {
          return  <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Title:
            </Typography>
            <Typography className={classes.typography}>
              {a.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <table>
                <tr>
                 <td><img className={classes.img} src={Film} alt="film"/></td>
                 <td><p className={classes.row}>Film:</p></td>
                 <td><p className={classes.rowValue}>{a.manufacturer} {a.film}</p></td>
                </tr>
                <tr>
                 <td><img className={classes.img} src={ASA} alt="asa"/></td>
                 <td><p className={classes.row}> ASA: </p></td>
                 <td><p className={classes.rowValue}>{a.asa}</p></td>
                </tr>
                <tr>
                   <td><img className={classes.img} src={PushPull} alt="pushPull"/></td>
                   <td><p className={classes.row}> Push/Pull: </p></td>
                   <td><p className={classes.rowValue}>{a.pushPull}</p></td>
                </tr>
                <tr>
                  <td><img className={classes.img} src={Developer} alt="developer"/></td>
                  <td><p className={classes.row}>Developer: </p></td>
                  <td><p className={classes.rowValue}>{a.developer}</p></td>
                </tr>
                <tr>
                  <td><img className={classes.img} src={Dilution} alt="dilution"/></td>
                  <td><p className={classes.row}> Diluton:</p></td>
                  <td><p className={classes.rowValue}> {a.dilution}</p></td>
                </tr>
                <tr>
                  <td><img className={classes.img} src={Minutes} alt="minutes"/></td>
                  <td><p className={classes.row}> Developing time:</p></td>
                  <td><p className={classes.rowValue}>{a.minutes} minutes</p></td>
                </tr>
              </table>
           </Typography>
              <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>NOTES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {a.notes}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </CardContent>
          <CardActions className={classes.del} >
            <Button size="small" color="secondary" variant="contained" onClick={e=>deleteData(a._id)}>Delete</Button>
          </CardActions>
        </Card>
      })}
   
    </>
  );
}
