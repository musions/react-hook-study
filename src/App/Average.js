import React, { useState, useMemo, useCallback } from 'react'

const getAverage = numbers =>{
  console.log("평균값 계산중....")
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b)=> a + b)
  return sum / numbers.length
}

const Average = ()=>{
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')

  const onChange = e=>{
    setNumber(e.target.value);
  }
  const onInsert = useCallback(()=>{
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
  }, [number, list])

  const avg = useMemo(()=>getAverage(list), [list])

  return (
    <div className="Average-container">
      <input type="text" value={number} onFocusout={onChange} />
      <button onClick={onInsert}>등록</button>
      <div className="Average-Value">평균값 : <b>{avg}</b></div>
      <ul>
        {
          list.map((value, index) => (  // 주의 여기에 소괄호 사용            
            <li key={index}>{value}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Average