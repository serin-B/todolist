import React, { useState } from 'react';
import styled from 'styled-components';
import { Someday } from './pages/Someday';
import { ThisMonth } from './pages/ThisMonth';
import { ThisWeek } from './pages/ThisWeek';
import { Today } from './pages/Today';

const TabMenu = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;

background-color: #e9ecef;
font-size: large;
font-weight: bold;

margin: 0;
margin-left: -40px;

.sub {
    height: 40px;
    padding-top: 15px;
    color: grey;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transition: 0.5s;
  }

  .focused {
    color: black;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transition: 0.5s;
  }
`

export const Tab = ({data, isPending}) => {
    const [curTab, setCurTab] = useState(0);
    const menuArr = [
        { name: 'Today', content: <Today data={data} curTab={curTab}/> },
        { name: 'This week', content: <ThisWeek data={data} curTab={curTab}/> },
        { name: 'This month', content: <ThisMonth data={data} curTab={curTab}/> },
        { name: 'Someday', content: <Someday data={data} curTab={curTab}/> },
    ];

    const selectMenuHandler = (index) =>{
        setCurTab(index)
    }


    return (
        <div>
            <TabMenu>
                {menuArr.map((el, index)=>{
                    return <li key={index}
                    className={curTab===index ? "focused sub" : "sub"}
                    onClick={()=> selectMenuHandler(index)}>{el.name}</li>
                })}
            </TabMenu>
            {isPending&& <h3>Loading...</h3>}
            {menuArr[curTab].content}
        </div>
    )
}