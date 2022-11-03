import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'
import "../styles/laptop.css"

function Model({ open, hinge, ...props }) {
    const group = useRef()
    // Load model
    const { nodes, materials } = useGLTF('/mac-draco.glb')
    // Take care of cursor state on hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    // Make it float in the air when it's opened
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
    })
    // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
    // Events and spring animations were added afterwards
    function handleOver(e) {
        e.stopPropagation();
        setHovered(true)
    }
    return (
        <group
            ref={group}
            {...props}
            onPointerOver={(e) => (handleOver(e))}
            onPointerOut={(e) => setHovered(false)}
            dispose={null}>
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
                </group>
            </three.group>
            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
        </group>
    )
}



export default function Laptop() {
    const [open, setOpen] = useState(false)
    const props = useSpring({ open: Number(open) })

    function handleClick(e) {
        e.stopPropagation();
        setOpen(!open)
    }

    return (
        <web.main className="!w-[90vw] block ml-auto mr-auto !h-[600px] lg:!h-[900px] rounded-[10px] border-[1px] border-white text-white"
            style={{ background: props.open.to([0, 1], ['#2b2422', '#60504C']) }}>
            <web.h5 className="font-['Atami_Display'] text-[55px] lg:text-[80px] uppercase"
                style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translateY(${o * 50 + 150}px)`) }}>
                I like to <br /> use this...
            </web.h5>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
                <ambientLight intensity={1} />
                <three.pointLight position={[0, 10, 5]} intensity={1.5} color={props.open.to([0, 1], ['#CABFBC', '#f9f5e9'])} />
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI, 0]} onClick={(e) => (handleClick(e))}>
                        <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
                    </group>

                </Suspense>
                <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
            </Canvas>
            <web.h5 className="lg:!translate-y-[-160px]"
                style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translateY(${o * -50 - 100}px)`) }}>
                (psst, click me!)
            </web.h5>
            <web.h5 className="font-['Atami_Display'] text-[45px] uppercase lg:mt-[-50px]"
                style={{ opacity: props.open.to([0, 1], [0, 1]), transform: props.open.to((o) => `translateY(${o * 50 - 225}px)`) }}>
                To make <br /> cool things
            </web.h5>
        </web.main>
    )
}
