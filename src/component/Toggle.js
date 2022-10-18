import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPatch } from '../util/api';

const Form = styled.form`
  width:94px;
  height: 30px;
  box-sizing:border-box;
  background-color:  ${(props)=> props.color || '#e9ecef'};
  transition: 0.7s;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.4);
  position:relative;
  border-radius:50px;
  cursor: pointer;
  :after {
  content:"";
  display:block;
  clear:both;
}
>.todo{
  transition: 0.7s;
}
>.doing{
  left: 30px;
  transition: 0.7s;
}

>.done{
  left: 60px;
  transition: 0.7s;
}
`

const LabelBox = styled.label`
  float:left;
  width:30px;
  position:relative;
  padding:20px 0px 40px;
  overflow:hidden;
  cursor: pointer;


input {
  position:absolute;
  top:-200%;
}
`

const MovingBox = styled.div`
  display:block;
  position:absolute;
  top:-2px;
  left:-2px;
  bottom:-2px;
  width:calc(33.33% + 4px);
  border-radius:50%;
  background-color: white;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.4);
  z-index: 1;
`

export const Toggle = ({id, toggle}) =>{

  const [curToggle, setCurToggle] = useState(toggle)
  const [bgColor, setBgColor] = useState('#e9ecef')

  useEffect(()=>{
    if(curToggle==='todo'){
      setBgColor('#ff595e')
    }else if(curToggle==='doing'){
      setBgColor('#ffca3a')
    }else if(curToggle==='done'){
      setBgColor('#7abd7e')
    }
  },[curToggle])

  const setTodo = () =>{
    let patchData = {"toggle": "todo"}
    fetchPatch('http://localhost:3001/todos/', id, patchData)
  }
  const setDoing = () =>{
    let patchData = {"toggle": "doing"}
    fetchPatch('http://localhost:3001/todos/', id, patchData)
  }
  const setDone = () =>{
    let patchData = {"toggle": "done"}
    fetchPatch('http://localhost:3001/todos/', id, patchData)
  }

  const handleClick = ()=>{
    if(curToggle==='todo'){
      let patchData = {"toggle": "doing"}
      fetchPatch('http://localhost:3001/todos/', id, patchData)
    }else if(curToggle==='doing'){
      let patchData = {"toggle": "done"}
      fetchPatch('http://localhost:3001/todos/', id, patchData)
    }else if(curToggle==='done'){
      let patchData = {"toggle": "todo"}
      fetchPatch('http://localhost:3001/todos/', id, patchData)
    }
  }

    return(
      <Form color={bgColor}>
        <MovingBox className={curToggle} onClick={handleClick}></MovingBox>
        <LabelBox>
          <input type="radio" 
          name='toggle' 
          value="todo" 
          onClick={setTodo}/>
        </LabelBox>
        <LabelBox>
          <input type="radio" 
          name='toggle' 
          value="doing" 
          onClick={setDoing}/>
        </LabelBox>
        <LabelBox>
          <input type="radio" 
          name='toggle' 
          value="done" 
          onClick={setDone}/>
        </LabelBox>
      </Form>
    )
}