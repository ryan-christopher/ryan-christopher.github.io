import React from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei"
import { Suspense } from 'react'

const Model = () => {
    const midi = useLoader(FBXLoader, "./midi/source/midi_03_exp.fbx");
    midi.position.z = 0;
    midi.position.x = 0
    midi.position.y = 0
    midi.rotation.x = -0.55
    midi.rotation.z = -0.75
    useFrame(() => {
        midi.rotation.y += 0.005
    })
    return <primitive object={midi} scale={0.055} />;
};

function Midi() {
    return (
        <div>
            <Canvas camera={{ position: [0, 0, -20] }}
                className='!w-[200px] !h-[300px] lg:!w-[500px] lg:!h-[400px] block lg:mt-[50px] lg:mb-[20px] ml-auto mr-auto hover:cursor-pointer'>
                <ambientLight intensity={1} />
                <directionalLight color="#bbbbbb" position={[6, 3, 3]} />
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Midi