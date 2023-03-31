import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import HomePage from "./pages/home";
import {Canvas,useLoader} from '@react-three/fiber';
import {
  EffectComposer,Noise,ChromaticAberration,Glitch
} from '@react-three/postprocessing';
import { TrackballControls ,Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {BlendFunction,GlitchMode} from 'postprocessing'
// import WordCloud from './pages/components/wordcloud';

const Scence = ({color})=>{

  const gltfobject = useLoader(GLTFLoader,'assets/bridge/modular_wooden_pier_1k.gltf');

  return <>
  <Canvas camera={{ position: [5, 15, 30], fov: 30 }}>
    {/* <Environment files='images/evening_road_01_2k.hdr' background /> */}
    <pointLight position={[10, 10, 10]} />
    <ambientLight intensity={0.2} />
    <primitive object={gltfobject.scene} />
    {/* <mesh scale={3} castShadow>
      <sphereGeometry args={[2,17,17]} />
      <meshStandardMaterial color={color} />
    </mesh> */}

    <EffectComposer>
      <Glitch
        delay={[1.5, 3.5]} // min and max glitch delay
        duration={[0.6, 1.0]} // min and max glitch duration
        strength={[0.3, 1.0]} // min and max glitch strength
        mode={GlitchMode.SPORADIC} // glitch mode
        active={false} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
        ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
      />
      {/* <Noise opacity={0.2} /> */}
      {/* <ChromaticAberration 
        blendFunction={BlendFunction.NORMAL}
        offset={[0.002, 0.002]}  
      /> */}
    </EffectComposer>
    <TrackballControls/>
  </Canvas>
  </>
};

const Lockbtn = ({func})=>{
  const [spcolor,setspcolor] = useState('hotpink');

  function updtcol(){
    setspcolor('red');
  }

  return <>
      <Scence color={spcolor}/>
      <div className="position-absolute top-50 start-50 translate-middle" title='Click and hold the button'>
        <button 
          style={{display:'none'}}
          className="btn btn-light" 
          onMouseOver={updtcol}
          onClick={func} type="button">HOLD
        </button>
      </div>
    </>
}

function App() {
  const [isClicked,setisClicked] = useState(false);

  function clicked(){
    setisClicked(true);
  }

  return (
    <>
      {(isClicked)?(<HomePage/>):(<Lockbtn func={clicked}/>)}
    </>
  );
}

export default App;
