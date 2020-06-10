import React from 'react';
import Timer from '../components/Timer';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./Timer.scss";


const TimerPage = () => {

  const [devSec, setDevSec] = React.useState();
  const [stopBathSec, setStopBathSec] = React.useState();
  const [fixerBathSec, setFixerBathSec] = React.useState();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150
    },
    button:{
      width: 250,
      height: 50
    }
  }));

  const classes = useStyles();
  const [startDev, setStartDev] = React.useState(false);
  const [startStopBath, setStartStopBath] = React.useState(false);
  const [startFixerBath, setStartFixerBath] = React.useState(false);



    return (<>
      <h1>Timer</h1>  
      <table className="table">
      <tr>
        <div className="developer">
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
              <Button className={classes.button} variant="contained" onClick={()=> setStartDev(!startDev)}>
                {startDev===false?"Start developer bath":"STOP"}
              </Button>
            </td>
            <td className="td"> {startDev===true?<Timer sec={devSec}/>:<div className="default">-</div>}</td>
        </div>
        </tr>
        <tr>
          <div className="stop">
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
               <Button className={classes.button} variant="contained" onClick={()=> setStartStopBath(!startStopBath)}>
               {startStopBath===false?"Start stop bath":"STOP"}
               </Button>
              </td>
             <td className="td">{startStopBath===true?<Timer sec={stopBathSec}/>:<div className="default">-</div>} 
             </td>
            </div>
          </tr>
          <tr>
         <div className="fixer">
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
            <Button className={classes.button} variant="contained" onClick={()=> setStartFixerBath(!startFixerBath)}>
            {startFixerBath===false?"Start fixer bath":"STOP"}
            </Button>
          </td>
          <td className="td">{startFixerBath===true?<Timer sec={fixerBathSec}/>:<div className="default">-</div>}</td>
         </div>
         </tr>
        </table>
  </>)
}

export default TimerPage;