import React from 'react';
import Fade from 'react-reveal/Fade';
import Processing from '../images/processing.jpg';
import NextArrow from '../images/nextArrow.svg';
import "./Processing.scss";
import {NextBackButton} from "../components/Button";

const Process = () => {

    const [step2, setStep2] = React.useState(false);
    const [step3, setStep3] = React.useState(false);
    const [step4, setStep4] = React.useState(false);
    const [step5, setStep5] = React.useState(false);
    const [step6, setStep6] = React.useState(false);

    function show2 () {
        setStep2(!step2);
    }
    function show3 () {
        setStep3(!step3);
    }
    function show4 () {
        setStep4(!step4);
    }
    function show5 () {
        setStep5(!step5);
    }
    function show6 () {
        setStep6(!step6);
    }

    return (<>
    <Fade  duration={1000} delay={50}>
    <h3>Developing process</h3>
    </Fade>
    <Fade  duration={1000} delay={1000}>
    <img className="imgProcess" src={Processing} alt="Developing process of film negative" />
    </Fade>
    <Fade  duration={1000} delay={2000}>
     <h4>Step 1: Exposure</h4>
        <p>Take an exposed film negative</p>
        <NextBackButton onClick={show2} step={step2}/>
    </Fade>

    <div className={step2===true?"steps_display":"steps_displayNone"}>
     <h4 >Step 2: Developer bath</h4>
        <p>The developer converts the latent image to macroscopic particles of metallic silver.</p>
        <NextBackButton onClick={show3} step={step3}/>
    </div>
    
    <div className={step3===true?"steps_display":"steps_displayNone"}>
     <h4>Step 3: Stop bath</h4>
        <p>A stop bath, typically a dilute solution of acetic acid or citric acid, halts the action of the developer. A rinse with clean water may be substituted.</p>
        <NextBackButton onClick={show4} step={step4}/> </div>
   
    <div className={step4===true?"steps_display":"steps_displayNone"}>
     <h4>Step 4: Fixer bath</h4>
        <p>The fixer makes the image permanent and light-resistant by dissolving remaining silver halide. A common fixer is hypo, specifically ammonium thiosulfate.</p>
        <NextBackButton onClick={show5} step={step5}/> </div>
   
    <div className={step5===true?"steps_display":"steps_displayNone"}>
     <h4>Step 5: Washing</h4>
        <p>Washing in clean water removes any remaining fixer. Residual fixer can corrode the silver image, leading to discolouration, staining and fading.</p>
        <NextBackButton onClick={show6} step={step6}/></div>
    
    <div className={step6===true?"steps_display":"steps_displayNone"}>
     <h4>Step 6: Drying</h4>
     </div>
    </>)
}

export default Process