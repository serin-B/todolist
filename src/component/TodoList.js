import styled from 'styled-components';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';

const TodoListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;

  width: 100%;
  height: 480px;
  padding-top: 5px;
`



export const TodoList = ({data, curTab}) => {

    return(
        <TodoListBlock>
            {data.map((data)=>{
                return <TodoItem key={data.id} id={data.id} text={data.text} toggle={data.toggle}/>
            })}
          <AddTodo curTab={curTab}/>
        </TodoListBlock>
    )
}