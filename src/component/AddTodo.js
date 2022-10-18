import { useState } from 'react';
import styled from 'styled-components';
import { fetchCreate } from '../util/api';

const Box = styled.div`
width: 96%;
height: 60px;
display: flex;
flex-direction: row;
align-items: center;
margin: 10px 0;
`

const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: gray;
  border: 1px solid gray;
  color: white;
  cursor: pointer;
`

const TodoForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: rgba(240,240,240,98);
  border-radius: 25px;
  border-radius: 25px;
`

const Input = styled.input`
width: 550px;
margin-left: 30px;
border-radius: 25px;
background-color: rgba(240,240,240,98);
outline: none;
border: 1px solid rgba(240,240,240,98);
font-size: 16px;
`

export const AddTodo = ({curTab})=>{

    const [open, setOpen] = useState(false);
    const [written, setWritten] = useState('')

    const handleAddClick = ()=>{
        setOpen(!open);
    }

    const handleInput = (e) =>{
        setWritten(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(e.key==='Enter'){
            const deadline = {0:"Today", 1:"ThisWeek", 2:"ThisMonth", 3:"Someday"} 
            const postData = {
                "deadline": deadline[curTab],
                "text": written,
                "toggle": "todo"
              }
            fetchCreate("http://localhost:3001/todos/", postData);
        }
    }

    return(
      <Box>
        {open ? (
            <TodoForm>
                <Input type='text'
                value={written}
                onChange={handleInput}
                onKeyUp={handleSubmit}
                placeholder='할일을 적고 Enter를 눌러 등록하세요'
                />
                <Button type="button" onClick={handleAddClick}>X Cancel</Button>
            </TodoForm>

        )
        : <Button onClick={handleAddClick}>+ ADD</Button>
        }
      </Box>
    )
}