import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Cube from "./cube/Cube";
import style from './stylePlayingFiels.module.css'
export default function PlayField() {

//   const massive = [[<Cube/>, <Cube/>],[<Cube/>],[<Cube/>]]  

 let array:any = [], i ,j;
 let cubes:any = [];

 for (i=0; i<5; i++){ 
    for (j=0; j<5; j++){
    cubes[j] = <Cube/>
  }
  array = [...array, cubes]
 }
  return (
    <div className={style.main}>
        {array.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
            return (<div className={style.line}>{item}</div>)
        })}
    </div>
  )
}
