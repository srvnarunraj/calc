import React, { Component } from 'react';
import Calculator from "./Components/calculatorSkin";

class App extends Component{
   render(){
      return(
         <div id="wrapper">
         <div id="calculator-wrapper">
           <Calculator/>
         </div>
       </div>
        );
   }
}
export default App;  