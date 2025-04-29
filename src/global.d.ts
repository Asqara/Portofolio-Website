export {};

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace ReactThreeFiber {
    interface Object3DNode<T, U> extends Record<string, any> {}

    interface ThreeElements {
      meshLineGeometry: Object3DNode<any, any>;
      meshLineMaterial: Object3DNode<any, any>;
    }
  }
}
