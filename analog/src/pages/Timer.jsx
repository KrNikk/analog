import React from 'react';
import Timer from '../components/Timer';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./Timer.scss";
import {TimesContext} from '../definitions/Times.context';
import Progress from '../components/Progress';


const TimerPage = () => {

  const [devSec, setDevSec] = React.useState();
  const [stopBathSec, setStopBathSec] = React.useState();
  const [fixerBathSec, setFixerBathSec] = React.useState();
  const {contextCounter, setContextCounter, counterValue, setCounterValue} = React.useContext(TimesContext);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150
    },
    button:{
      width: 250,
      height: "100%"
    },
    buttonDisabled:{
      width: 250,
      height: "100%"
    }
  }));

  const classes = useStyles();
  const [startDev, setStartDev] = React.useState(false);
  const [startStopBath, setStartStopBath] = React.useState(false);
  const [startFixerBath, setStartFixerBath] = React.useState(false);

  const remember = {
    developer:
       "Agitation is required during processing to keep fresh developer near the surface of the film. Without agitation, especially in the developer development will be uneven, often producing bars of alternating light and dark areas across the film. Techniques for agitation differ between metal and plastic reels."
    ,
    stop:
      "Stop bath halts the development process almost immediately and provides precise control of development time."
    ,
    fixer:
      "Fixer is remove the silver halide crystals from the film, to fix the image. After this step rinse the tank for a couple of minutes, before opening the lid and rinsing the film directly. After this is done, you can finally view the contents within! If everything has gone well, you should have a roll of perfectly exposed negatives."
 }

  const [rememberNote, setRememberNote] = React.useState("");

  React.useEffect(() => {
    console.log(contextCounter);
    if(contextCounter==0){
      setStartDev(false);
      setStartStopBath(false);
      setStartFixerBath(false);
      setRememberNote("")
    }
}, [contextCounter])

 
    return (<>
      <h1>Timer</h1>  
      <table className="table">
      <tbody>
      <tr className="tr">
        <td className="td"> <h2>Set developer bath time: </h2></td>
        <td className="td"> <FormControl>
              <TextField
                className={classes.formControl}
                id="outlined-number"
                name="seconds"
                label="Developer bath time (seconds)"
                type="number"
                InputProps={{inputProps:{min:0, className:"input"}}}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e)=> setDevSec(e.target.value)} 
              />
            </FormControl></td>
            <td className="td"> 
            {startStopBath===true||startFixerBath===true?<Button disabled className={classes.buttonDisabled} variant="contained" onClick={()=> setStartDev(!startDev)}>
                {startDev===false?"Start developer bath":"STOP"}
              </Button>: <Button className={classes.buttonDisabled} variant="contained" onClick={()=> {setStartDev(!startDev); setRememberNote(remember.developer)}}>
                {startDev===false?"Start developer bath":"STOP"}
              </Button>}
            </td>
            <td className="td"> {startDev===true?<Timer sec={devSec}/>:<div className="default">-</div>}</td>
        </tr>
        <hr className="hr"></hr>
        <tr className="tr">
           <td className="td"><h2>Set stop bath time: </h2></td>
              <td className="td"><FormControl>
                <TextField
                  className={classes.formControl}
                  id="outlined-number"
                  name="seconds"
                  label="Stop bath time (seconds)"
                  type="number"
                  InputProps={{inputProps:{min:0, className:"input"}}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e)=> setStopBathSec(e.target.value)} 
                />
             </FormControl>
             </td>
             <td className="td">
               {startDev===true||startFixerBath===true?<Button disabled className={classes.button} variant="contained" onClick={()=> setStartStopBath(!startStopBath)}>
               {startStopBath===false?"Start stop bath":"STOP"}
               </Button>:<Button className={classes.button} variant="contained" onClick={()=> {setStartStopBath(!startStopBath); setRememberNote(remember.stop)}}>
               {startStopBath===false?"Start stop bath":"STOP"}
               </Button>}
              </td>
             <td className="td">{startStopBath===true?<Timer sec={stopBathSec}/>:<div className="default">-</div>} 
             </td>
          </tr>
          <hr className="hr"></hr>
          <tr className="tr">
          <td className="td"><h2>Set fixer bath time: </h2></td>
          <td className="td"><FormControl>
                <TextField
                  className={classes.formControl}
                  id="outlined-number"
                  name="seconds"
                  label="Fixer bath time (seconds)"
                  type="number"
                  InputProps={{inputProps:{min:0, className:"input"}}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e)=> setFixerBathSec(e.target.value)} 
                />
          </FormControl></td>
          <td className="td">
            {startDev===true||startStopBath===true?<Button disabled className={classes.button} variant="contained" onClick={()=> setStartFixerBath(!startFixerBath)}>
            {startFixerBath===false?"Start fixer bath":"STOP"}
            </Button>:<Button className={classes.button} variant="contained" onClick={()=> {setStartFixerBath(!startFixerBath); setRememberNote(remember.fixer)}}>
            {startFixerBath===false?"Start fixer bath":"STOP"}
            </Button>}
          </td>
          <td className="td">{startFixerBath===true?<Timer sec={fixerBathSec}/>:<div className="default">-</div>}</td>
         </tr>
         </tbody>
        </table>   
        <div className="remember">
        <h5 className="rememberh5">{startDev===true||startStopBath===true||startFixerBath===true?"REMEMBER":""}</h5>
        <br/>
        <p>{startDev===false&&startStopBath===false&&startFixerBath===false?"":rememberNote}</p>
        </div>
  </>)
}

export default TimerPage;