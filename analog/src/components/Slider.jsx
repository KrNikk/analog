import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 30,
    },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              className={classes.formControl}
              checked={state.checked}
              onChange={handleChange}
              name="checked"
            />
          }
          label="Set data"
        />
      </FormGroup>
    </>
  );
}
