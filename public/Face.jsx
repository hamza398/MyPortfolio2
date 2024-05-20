

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/face.glb')
  return (
    <group {...props} dispose={null} scale={0.9}>
      <group position={[0, -2, -0.004]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 13.033, 41.79]} scale={13.593}>
            <mesh geometry={nodes.face_retopo013_skin_0.geometry} material={materials.skin} />
            <mesh geometry={nodes.face_retopo013_hair001_0.geometry} material={materials['hair.001']} />
            <mesh geometry={nodes.face_retopo013_Material_0.geometry} material={materials.Material} />
          </group>
          <group position={[112.338, 153.585, 106.687]} rotation={[-Math.PI / 2, 0, 0]} scale={82.039}>
            <mesh geometry={nodes.eyeBallL007_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallL007_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[-109.074, 153.585, 106.687]} rotation={[-Math.PI / 2, 0, 0]} scale={82.039}>
            <mesh geometry={nodes.eyeBallR007_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallR007_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[0.07, -91.615, 177.31]} rotation={[0.406, 0, 0]} scale={244.017}>
            <mesh geometry={nodes.Figure_5_node003_Figure_5_geometry003_Teeth_0.geometry} material={materials.Teeth} />
            <mesh geometry={nodes.Figure_5_node003_Figure_5_geometry003_Gums_0.geometry} material={materials.Gums} />
          </group>
          <group position={[0, -104.254, 147.502]} rotation={[0.389, 0, 0]} scale={244.017}>
            <mesh geometry={nodes.Figure_5_node002_Figure_5_geometry004_Gums_0.geometry} material={materials.Gums} />
            <mesh geometry={nodes.Figure_5_node002_Figure_5_geometry004_Tongue_0.geometry} material={materials.Tongue} />
          </group>
          <group position={[0.022, -117.693, 167.673]} rotation={[0.134, 0, 0]} scale={244.017}>
            <mesh geometry={nodes.Figure_5_node000_Figure_5_geometry004_Teeth_0.geometry} material={materials.Teeth} />
            <mesh geometry={nodes.Figure_5_node000_Figure_5_geometry004_Gums_0.geometry} material={materials.Gums} />
          </group>
          <group position={[0, 13.033, 41.79]} scale={13.593}>
            <mesh geometry={nodes.face_retopo012_skin_0.geometry} material={materials.skin} />
            <mesh geometry={nodes.face_retopo012_hair001_0.geometry} material={materials['hair.001']} />
            <mesh geometry={nodes.face_retopo012_Material_0.geometry} material={materials.Material} />
          </group>
          <group position={[112.338, 153.585, 106.687]} rotation={[-Math.PI / 2, 0, 0]} scale={82.039}>
            <mesh geometry={nodes.eyeBallL006_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallL006_iris_0.geometry} material={materials.iris} />
          </group>
          <group position={[-109.074, 153.585, 106.687]} rotation={[-Math.PI / 2, 0, 0]} scale={82.039}>
            <mesh geometry={nodes.eyeBallR006_sclera_cornea_0.geometry} material={materials.sclera_cornea} />
            <mesh geometry={nodes.eyeBallR006_iris_0.geometry} material={materials.iris} />
          </group>
          <mesh geometry={nodes.hair006_hair001_0.geometry} material={materials['hair.001']} position={[65.097, 443.569, 229.629]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={132.493} />
          <mesh geometry={nodes.eyebrows007_eyebrows_0.geometry} material={materials.eyebrows} position={[0, 174.639, 237.928]} scale={17.819} />
          <mesh geometry={nodes.eye_lashes007_eyebrows_0.geometry} material={materials.eyebrows} position={[0, 171.065, 312.976]} scale={13.593} />
          <mesh geometry={nodes.eyebrows006_eyebrows_0.geometry} material={materials.eyebrows} position={[0, 174.639, 237.928]} scale={17.819} />
          <mesh geometry={nodes.eye_lashes006_eyebrows_0.geometry} material={materials.eyebrows} position={[0, 171.065, 312.976]} scale={13.593} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/face.glb')
