import "antd/lib/input/index.d"
import "antd/lib/button/index.d"
import {Action} from "react-redux"

declare module "antd/lib/input/index.d" {
  export interface InputProps {
    label?:string
    name?:string
  }
}