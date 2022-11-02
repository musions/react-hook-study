import React, { useReducer } from "react"


const calCount = (value , number, times)=>{
  for(let i=0; i<times; i++){
    value = value + number;
  }
  return value
}


// 리듀스 변경함수는 기본 출력함수 외부에 선언
const changeCount = (state, action) =>{  
  console.log("계산실행")
  switch(action.type){
    case "ADD ONE":     
      console.log("더하기 한번") 
      // 이부분에 내용이 들어가면 두번 실행이 됩니다.
      // 그래서 아래와 같이 외부에 함수를 만들어서, return 부분에서 불러 왔습니다. 
      // return 전에 계산해서 실행하면 안된는지 찾아 볼 것.
      return { value: calCount(state.value, 1, 1) }

    case "REMOVE ONE":
      console.log("빼기 한번")
      return { value: calCount(state.value, -1, 1) }

    case "ADD TWO":      
      console.log("더하기 두번")
      return { value : calCount(state.value, 1, 2) }

    case "REMOVE TWO":    
      console.log("빼기 두번")  
      return { value : calCount(state.value, -1, 2) }

    default :
      console.log(state)
      return { value : 0 }
  }
}

const RedCounter = ()=>{
 
  const [state, updateState] = useReducer(changeCount, {value : 0})
  console.log("test")
  return (
    <div className="reCount-container">
      <p>현재 카운터는 <b>{state.value}</b>입니다.</p>
      <button onClick={()=>updateState({type: "ADD ONE"})}> + 1 </button>
      <button onClick={()=>updateState({type: "ADD TWO"})}> + 2 </button>
      <button onClick={()=>updateState({type: "REMOVE TWO"})}> - 2 </button>
      <button onClick={()=>updateState({type: "REMOVE ONE"})}> - 1 </button>
      <button onClick={()=>updateState({type: ""})}> RESET </button>
    </div>
  )
}
export default RedCounter