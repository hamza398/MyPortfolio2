

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/woman.glb')
  return (
    <group {...props} scale={0.17} position={[0,-3.9,0]} dispose={null}>
      <group >
        <mesh geometry={nodes.Eyelashes_mush_Eyelashes_0.geometry} material={materials.Eyelashes} />
        <mesh geometry={nodes.Hair_mush_Hair_Cap_0.geometry} material={materials.Hair_Cap} />
        <mesh geometry={nodes.Hair_mush_FrontR_Mat_0.geometry} material={materials.FrontR_Mat} />
        <mesh geometry={nodes.Hair_mush_SideR_Mat_0.geometry} material={materials.SideR_Mat} />
        <mesh geometry={nodes.Hair_mush_FrontL_Mat_0.geometry} material={materials.FrontL_Mat} />
        <mesh geometry={nodes.Hair_mush_SideL_Mat_0.geometry} material={materials.SideL_Mat} />
        <mesh geometry={nodes.Hair_mush_Back_Mat_0.geometry} material={materials.Back_Mat} />
        <mesh geometry={nodes.Hair_mush_FrontL_f_Mat_0.geometry} material={materials.FrontL_f_Mat} />
        <mesh geometry={nodes.Hair_mush_Back_f_Mat_0.geometry} material={materials.Back_f_Mat} />
        <mesh geometry={nodes.Hair_mush_SideR_f_Mat_0.geometry} material={materials.SideR_f_Mat} />
        <mesh geometry={nodes.Hair_mush_SideL_f_Mat_0.geometry} material={materials.SideL_f_Mat} />
        <mesh geometry={nodes.Eye_L_Pupils_0.geometry} material={materials.Pupils} />
        <mesh geometry={nodes.Eye_L_Irises_0.geometry} material={materials.Irises} />
        <mesh geometry={nodes.Eye_L_Sclera_0.geometry} material={materials.Sclera} />
        <mesh geometry={nodes.Eye_R_Pupils_0.geometry} material={materials.Pupils} />
        <mesh geometry={nodes.Eye_R_Irises_0.geometry} material={materials.Irises} />
        <mesh geometry={nodes.Eye_R_Sclera_0.geometry} material={materials.Sclera} />
        <mesh geometry={nodes.Cornea_L_Cornea_0.geometry} material={materials.Cornea} />
        <mesh geometry={nodes.Cornea_R_Cornea_0.geometry} material={materials.Cornea} />
        <mesh geometry={nodes.Face_mush_Face_0.geometry} material={materials.Face} />
        <mesh geometry={nodes.Face_mush_Torso_0.geometry} material={materials.Torso} />
        <mesh geometry={nodes.Mouth_mush_Mouth_0.geometry} material={materials.Mouth} />
      </group>
    </group>
  )
}

useGLTF.preload('/woman.glb')
