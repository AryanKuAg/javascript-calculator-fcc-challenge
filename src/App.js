import React, { useState } from "react";
import CalButton from "./CalButton";
import dataList from "./dataList";
import Display from "./Display";

function App() {
  const [up, setUp] = useState("");
  const [down, setDown] = useState("0");


  function evaluation(value) {
    // first it puts string into 'left' if it finds + - / x then it will set op to that. then take right values.
    // if it finds another operator, then it set left to result, set op to that operator, and listen right for the values
    // at the end, out of the loop, it will add the last result from right;
    let left = '';
    let right = '';
    let op = '';
  
    for(let i of value) {

      if((i === '+' || i === '-' || i === 'x' || i === '/') && left.length >= 1){
        if( op.length >= 1 && left.length >= 1 && right.length >= 1){
          // left = parseFloat(left) + parseFloat(right);
          if(op === '+'){
            left = (parseFloat(left) + parseFloat(right)).toString();
          }else if(op === '-'){
            left = (parseFloat(left) - parseFloat(right)).toString();
          }else if (op === 'x'){
            left = (parseFloat(left) * parseFloat(right)).toString();
          }else if (op === '/'){
            left = (parseFloat(left) / parseFloat(right)).toString();
          }
          right = ''
          op = i
          continue;
        }
        op = i
        continue;
      }

      if(left.length >= 1 && op.length >= 1){
        right = right + i;
        continue;
      }
      
      if(op === ''){
        left = left + i
      }      
    }
    if(op === '+'){
      left = (parseFloat(left) + parseFloat(right)).toString();
    }else if(op === '-'){
      left = (parseFloat(left) - parseFloat(right)).toString();
    }else if (op === 'x'){
      left = (parseFloat(left) * parseFloat(right)).toString();
    }else if (op === '/'){
      left = (parseFloat(left) / parseFloat(right)).toString();
    }

    return left;
  }

  function cal(value) {
    if(value === "AC"){
      setUp("")
      setDown('0')
    }
    if(up.length >= 30 || down.length >= 14)return;

    switch (value) {
      case "AC":
        setUp("");
        setDown("0");
        break;
      case "=":
        setDown(evaluation(up))
        setUp("")
        break;
      case "+":
        setUp(pre => pre + value)
        setDown('+')
        break;
      case "-":
        setUp(pre => pre + value)
        setDown('-')
        break;
      case "/":
        setUp(pre => pre + value)
        setDown('/')
        break;
      case "x":
        setUp(pre => pre + value)
        setDown('x')
        break;
      case "1":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "2":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "3":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "4":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "5":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "6":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "7":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "8":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
      case "9":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))// code block
        break;
      case "0":
        setUp(pre => pre + value)
        setDown(pre => parseInt(pre + value))
        break;
        case ".":
          setUp(pre => {if(!pre.includes(".")) return pre + value; else return pre})
          setDown(pre => parseInt(pre + value))
          break;
      default:
      // code block
    }
  }

  return (
    <div className="mx-auto w-[25rem] mt-6">
      <Display up={up} down={down} />

      <div className="grid grid-cols-4">
        {dataList.map((e) => (
          <CalButton {...e} down={cal} />
        ))}
      </div>
    </div>
  );
}

export default App;
