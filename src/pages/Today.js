import { TodoList } from "../component/TodoList"


export const Today = ({data, curTab})=>{

    const filteredData = data.filter((data)=>{
        return data.deadline==='Today'
    })
    
    return(
        <>
        <TodoList data={filteredData} curTab={curTab}/>
        </>
    )
}