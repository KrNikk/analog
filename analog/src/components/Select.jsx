import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { TimesContext } from "../definitions/Times.context";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    height: 55,
  },
}));

const manufacturers = ["ILFORD", "KODAK", "FOMA"];
const films = [
  "DELTA 100",
  "DELTA 400",
  "DELTA 3200",
  "FP4 PLUS",
  "HP5 PLUS",
  "PANF PLUS",
  "SFX 200",
];
const asas = [25, 50, 100, 200, 400, 800, 1600, 3200];
const developers = [
  "ILFOTEC DD-X",
  "ILFOTEC LC29",
  "ILFOTEC HC",
  "ILFOSOL 3",
  "ID 11",
  "MICROPHEN",
  "PERCEPTOL",
  "D-76",
  "RODINAL",
  "T-MAX",
  "XTOL",
  "HC 110",
  "ACUFINE",
  "SPRINT",
];
const dilutions = [
  "Stock",
  "1+1",
  "1+3",
  "1+4",
  "1+9",
  "1+15",
  "1+19",
  "1+25",
  "1+29",
  "1+31",
  "1+47",
  "1+50",
];

export default function Selecton() {
  const [state, setState] = React.useState({
    manufacturer: "",
    film: "",
    asa: "",
    developer: "",
    dilution: "",
    minutes: "",
  });

  const [errors, setErrors] = React.useState([]);
  const { fetchData, analog } = React.useContext(TimesContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/times", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        manufacturer: state.manufacturer,
        film: state.film,
        asa: state.asa,
        developer: state.developer,
        dilution: state.dilution,
        minutes: state.minutes,
      }),
    })
      .then(console.log(state))
      .then(fetchData)
      .catch((err) => setErrors(err));
  };

  const classes = useStyles();

  const handleChangeManufacturer = (event) => {
    const manufacturer = event.target.name;
    setState({
      ...state,
      [manufacturer]: event.target.value,
    });
  };

  const handleChangeFilm = (event) => {
    const film = event.target.name;
    setState({
      ...state,
      [film]: event.target.value,
    });
  };

  const handleChangeAsa = (event) => {
    const asa = event.target.name;
    setState({
      ...state,
      [asa]: event.target.value,
    });
  };
  const handleChangeDeveloper = (event) => {
    const developer = event.target.name;
    setState({
      ...state,
      [developer]: event.target.value,
    });
  };

  const handleChangeDilution = (event) => {
    const dilution = event.target.name;
    setState({
      ...state,
      [dilution]: event.target.value,
    });
  };

  const handleChangeMinutes = (event) => {
    const minutes = event.target.name;
    setState({
      ...state,
      [minutes]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Manufacturer
          </InputLabel>
          <Select
            native
            value={state.manufacturer}
            onChange={handleChangeManufacturer}
            label="Manufacturer"
            inputProps={{
              name: "manufacturer",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {manufacturers.map((manufacturer) => {
              return <option value={manufacturer}>{manufacturer}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Film</InputLabel>
          <Select
            native
            value={state.film}
            onChange={handleChangeFilm}
            label="Film"
            inputProps={{
              name: "film",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {films.map((film) => {
              return <option value={film}>{film}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">ASA</InputLabel>
          <Select
            native
            value={state.asa}
            onChange={handleChangeAsa}
            label="ASA"
            inputProps={{
              name: "asa",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {asas.map((asa) => {
              return <option value={asa}>{asa}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Developer
          </InputLabel>
          <Select
            native
            value={state.developer}
            onChange={handleChangeDeveloper}
            label="Developer"
            inputProps={{
              name: "developer",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {developers.map((developer) => {
              return <option value={developer}>{developer}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Dilution</InputLabel>
          <Select
            native
            value={state.dilution}
            onChange={handleChangeDilution}
            label="Dilution"
            inputProps={{
              name: "dilution",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {dilutions.map((dilution) => {
              return <option value={dilution}>{dilution}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <TextField
            className={classes.formControl}
            id="outlined-number"
            name="minutes"
            value={state.minutes}
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleChangeMinutes}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          SUBMIT
        </Button>
      </form>
    </>
  );
}
