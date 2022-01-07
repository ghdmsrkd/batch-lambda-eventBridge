import {pointExpird} from "./point.expired"

export const mapper = (event : string) =>{
  switch(event){
    case "POINT_EXPIRED":
      return () => pointExpird
    default:
      return () => undefined
  }
}