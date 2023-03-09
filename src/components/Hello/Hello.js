import { click } from "@testing-library/user-event/dist/click";
import React,{Component} from "react";
  import'./Hello.css';
class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Hello world</h1>
          
                   
            </div>
        )
    }
}
export default Hello;