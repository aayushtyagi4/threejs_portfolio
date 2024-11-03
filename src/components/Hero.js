import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';
import HackerRoom from './HackerRoom';
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from '../constants/index'
import Target from './Target';
import ReactLogo from './ReactLogo';
import Cube from './Cube';
import Rings from './Ring';
import HeroCamera from './HeroCamera';
import Button from './Button'
import CanvasLoader from '../components/Loader'

export const Hero = () => {

  const isSmall = useMediaQuery({maxWidth:440});
  const isMobile = useMediaQuery({maxWidth:768});
  const isTablet = useMediaQuery({minWidth:768,maxWidth:1024});

  const sizes=calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans "> 
          Hi, I am Aayush
          <span className="waving-hand">👋 </span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0,-Math.PI,0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>

        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space' >
          <a href='#about' className='w-fit' >
            <Button name="Let's work together" isBeam containerClass = "sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      </div>
    </section>
  );
};
