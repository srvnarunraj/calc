import React,{Component} from 'react';
import { evaluate, string } from 'mathjs';
import styles from "./calculator.css" ;



    class calculator extends Component{
      state={
        displayValue: '0'
      }
      
      inputDigit(digit){
        const { displayValue} = this.state

        this.setState(
          {displayValue: displayValue + digit }
        )
      }
    render() 
    {
         const { displayValue} = this.state

         return (<div className="calculator">
         
        <div className="calculator-display">{displayValue}</div>
        <div className="calculator-wrapper">
        <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button id="key-clear" value="C" className="calculator-key key-clear" >AC</button>
            <button id="key-sign" value="±" className="calculator-key key-sign">&plusmn;</button>
            <button id="key-percent" value="%" className="calculator-key key-percent">%</button>
            </div>
                   
            <div className="digit-keys">
            <button id="key-0" value="0" className="calculator-key key-0" onClick={()=> this.inputDigit(0)}>0</button>
            <button id="key-dot" value="." className="calculator-key key-dot" >&middot;</button>
            <button id="key-1" value="1" className="calculator-key key-1" onClick={()=> this.inputDigit(1)}>1</button>
            <button id="key-2" value="2" className="calculator-key key-2" onClick={()=> this.inputDigit(2)}>2</button>
            <button id="key-3" value="3" className="calculator-key key-3" onClick={()=> this.inputDigit(3)}>3</button>
            <button id="key-4" value="4" className="calculator-key key-4" onClick={()=> this.inputDigit(4)}>4</button>
            <button id="key-5" value="5" className="calculator-key key-5" onClick={()=> this.inputDigit(5)}>5</button>
            <button id="key-6" value="6" className="calculator-key key-6" onClick={()=> this.inputDigit(6)}>6</button>
            <button id="key-7" value="7" className="calculator-key key-7" onClick={()=> this.inputDigit(7)}>7</button>
            <button id="key-8" value="8" className="calculator-key key-8" onClick={()=> this.inputDigit(8)}>8</button>
            <button id="key-9" value="9" className="calculator-key key-9" onClick={()=> this.inputDigit(9)}>9</button>
            </div>
            </div>
        
        

        <div className="operator-keys">
          <button id="key-divide" value="/" className="calculator-key key-divide" onClick={this.handleClick}>&divide;</button>
          <button id="key-multiply" value="*" className="calculator-key key-multiply" onClick={this.handleClick}>&times;</button>
          <button id="key-subtract" value="-" className="calculator-key key-subtract" onClick={this.handleClick}>&ndash;</button>
          <button id="key-add" value="+" className="calculator-key key-add" onClick={this.handleClick}>+</button>
          <button id="key-equals" value="=" className="calculator-key key-equals" onClick={this.handleClick}>=</button>
        </div>
        </div>
                       
       
        </div>
        </div>
                
          

     )
    }
  }
     export default calculator;
    
