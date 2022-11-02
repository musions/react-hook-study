import React, {useState} from "react"

const Counter = ()=>{

  const [value, setValue] = useState(0);
  const addValue = ()=>{
    console.log("더하기")
    setValue((currentNumber)=> {
      // 이렇게 함수를 써서 처리 해야 반복될 경우 오류 발생 안됨. 
      // set ~~ 매써드 이용시 받는 변수는 최근 변수 값. 그러니깐 여기서 setValue 함수를 사용하면서 받는 currentNumber 는 value의 최근 값을 받아 옴.
      return currentNumber + 1;
    })     
  }
  const removeValue = ()=>{    
    console.log("빼기")
    setValue((currentNumber)=>{
      return currentNumber - 1;
    })
  }
  return (
    <div className="CounterLayout">
      <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
      <button onClick={addValue}> + 1 </button>
      <button onClick={removeValue}> - 1 </button>
    </div>
  )
}
export default Counter