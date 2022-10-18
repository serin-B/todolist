import { Toggle } from "./Toggle"
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { fetchDelete } from "../util/api";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 96%;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(240,240,240,98);

  margin: 10px 0px 0px 0px;
`

const Text = styled.div`
  width: 500px;
  border-radius: 25px;
  outline: none;
  border: none;
  font-size: 16px;
  margin-right: 70px;
`
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`

export const TodoItem = ({id, text, toggle}) => {

  const handleDeleteClick = ()=>{
    fetchDelete('http://localhost:3001/todos/', id)
  }

    return(
        <ItemContainer>
            <Text>
              {text}
            </Text>
            <Toggle id={id} toggle={toggle}/>
            <Remove onClick={handleDeleteClick}><MdDelete/></Remove>
        </ItemContainer>
    )
}