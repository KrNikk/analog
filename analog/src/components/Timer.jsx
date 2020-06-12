import React from 'react';
import Progress from '../components/Progress';
import {TimesContext} from '../definitions/Times.context';

const Timer = ({sec}) => {
    const {contextCounter, setContextCounter, setCounterValue} = React.useContext(TimesContext);
    const [counter, setCounter] = React.useState(sec);
 
     React.useEffect(()=> {
      setTimeout(()=>setContextCounter(counter),1000)
      setTimeout(() => setCounterValue(counter),1000)
      counter > 0 && setTimeout(() => setCounter(counter-1),1000);
    }, [counter]); 

    return(<>
      <div style={{fontSize: "xxx-large", marginLeft:"1rem"}}>
          {counter}
      </div>
      <div >{counter==0?"":<Progress />}</div>
      </>
      )
}

export default Timer;