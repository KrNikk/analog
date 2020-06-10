import React from 'react';

const Timer = ({sec}) => {

    const [counter, setCounter] = React.useState(sec);
 
     React.useEffect(()=> {
      counter > 0 && setTimeout(() => setCounter(counter-1),1000); 
    }, [counter]); 

    return(<div style={{fontSize: "xxx-large", marginLeft:"1rem"}}>{counter}</div>)
}

export default Timer;