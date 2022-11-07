import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei"
import { Suspense } from 'react'



const Model = () => {
    const coffeefbx = useLoader(FBXLoader, "./coffee_cup_fbx/Paper_coffee_cup.fbx");
    coffeefbx.position.y = -0.5
    coffeefbx.rotation.x = 0
    coffeefbx.rotation.z = 0
    coffeefbx.rotation.x += 0.1;
    coffeefbx.rotation.z -= 0.05
    return <primitive object={coffeefbx} scale={0.011} />;
};

function CoffeeCup() {
    return (
        <div>
            <Canvas frameloop="demand" className='!w-[200px] !h-[200px] lg:!w-[300px] lg:!h-[300px] block ml-auto mr-auto mt-[50px] mb-[50px] hover:cursor-pointer'>
                <ambientLight intensity={1.5} />
                <Suspense fallback={null}>
                    <OrbitControls autoRotate={true} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default CoffeeCup