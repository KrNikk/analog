import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import CameraIcon from '@material-ui/icons/Camera';
import CameraRollIcon from '@material-ui/icons/CameraRoll';

const MenuButton = ({ className, name, to }) => {
  return (
    <>
      {/* <Flip right> */}
        <Link to={to}>
          <button className={className}>{name}</button>
        </Link>
      {/* </Flip> */}
    </>
  );
};

const SendButton = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      width: "5rem",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        /*    style={
        state.checked === true
          ? { display: "inline-grid" }
          : { display: "none" }
      } */
      >
        Send
      </Button>
    </>
  );
};

const NextBackButton = ({onClick, step}) => {
  return(
  <div className={"steps"} onClick={onClick}><CameraRollIcon
   style={{color: "#7d0c21"}} alt="step"/>{(step)===false?"Next step":"Hide step"}
  </div> 
  )
}

export { MenuButton, SendButton, NextBackButton };
