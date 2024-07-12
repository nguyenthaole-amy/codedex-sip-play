import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CanCanvas = () => {
    const earth = useGLTF('coffee_shop_cup/scene.gltf');

    return (
        <Canvas className="cursor-pointer" frameloop="demand" perspectivecamera={{ fov: 20, aspect: window.innerWidth / window.innerHeight, near: 1, far: 1000 }}>
            <ambientLight />
            <directionalLight color={0xffffff} position={[0, 100, 100]} intensity={1} />
            <OrbitControls autoRotate={false} enableZoom={true} enableRotate={true} />
            <mesh>
                <primitive object={earth.scene} scale={2.5} />
            </mesh>
        </Canvas>
    );
};

export default CanCanvas;