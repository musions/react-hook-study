import React, {useState, useEffect} from "react"

const Info = ()=>{
  
  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState("")
  const [thiredValue, setThiredValue] = useState("")

  useEffect(()=>{
    console.log("렌더링 완료")
    console.log(firstValue, secondValue, thiredValue)
  },[thiredValue])


  const changeFirstValue = e =>{    
    setFirstValue(e.target.value);
  }
  const changeSecondValue = e =>{    
    setSecondValue(e.target.value);
  }
  const changeThiredValue = e =>{    
    setThiredValue(e.target.value);
  }

  return (
    <div className="info-container">
      <div className="info-insert">
        <p><input type="text" value={firstValue} onChange={changeFirstValue} /></p>
        <p><input type="text" value={secondValue} onChange={changeSecondValue} /></p>
        <p><input type="text" value={thiredValue} onChange={changeThiredValue} /></p>
      </div>
      <div className="info-result">
        <p>첫번째 값 : <b>{firstValue}</b></p>
        <p>두번째 값 : <b>{secondValue}</b></p>
        <p>세번째 값 : <b>{thiredValue}</b></p>
      </div>
    </div>
  )

}

export default Info