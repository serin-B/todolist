import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 800px;
  height: 540px;

  /* position: relative; 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 80px;

  display: flex;
  flex-direction: column;
`

export const TodoTemplate = ({ children }) => {

    return(
        <TodoTemplateBlock>
            { children }
        </TodoTemplateBlock>
    )
}