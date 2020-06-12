import React from 'react';
import Fade from 'react-reveal/Fade';
import Processing from '../images/processing.jpg';
import NextArrow from '../images/nextArrow.svg';
import "./Processing.scss";
import {NextBackButton} from "../components/Button";
import CameraRollIcon from '@material-ui/icons/CameraRoll';

const Process = () => {

    function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(()=> {
        const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
          }
        )
        observer.observe(domRef.current);
    },[]);
    return( 
         <div className={`fade-in-section ${isVisible? 'is-visible': ''}`}
            ref={domRef}>
                {props.children}
        </div>   
        ) 
    }
    

    const steps = [
        {stepName: "Step 1: Exposure", stepDetail:"Take an exposed film negative"},
        {stepName: "Step 2: Developer bath", stepDetail:"The developer converts the latent image to macroscopic particles of metallic silver."},
        {stepName: "Step 3: Stop bath", stepDetail:"A stop bath, typically a dilute solution of acetic acid or citric acid, halts the action of the developer. A rinse with clean water may be substituted."},
        {stepName: "Step 4: Fixer bath", stepDetail:"TThe fixer makes the image permanent and light-resistant by dissolving remaining silver halide. A common fixer is hypo, specifically ammonium thiosulfate."},
        {stepName: "Step 5: Washing", stepDetail:"Washing in clean water removes any remaining fixer. Residual fixer can corrode the silver image, leading to discolouration, staining and fading."},
        {stepName: "Step 6: Drying", stepDetail:""},
    ]

    return (<>
    <Fade  duration={1000} delay={50}>
    <h3>Developing process</h3>
    </Fade>
    <Fade  duration={1000} delay={300}>
    <img className="imgProcess" src={Processing} alt="Developing process of film negative" />
    </Fade>
    {steps.map((step) => {
        return(
        <FadeInSection key={step.stepName}>
        <h4>{step.stepName}</h4>
        <p>{step.stepDetail}</p>
        <CameraRollIcon style={{color: "#7d0c21"}} alt="step"/>
      </FadeInSection>
        )
    })}
    </>)
}

export default Process