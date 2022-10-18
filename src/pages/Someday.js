import { TodoList } from "../component/TodoList"


export const Someday = ({data, curTab})=>{

    const filteredData = data.filter((data)=>{
        return data.deadline==='Someday'
    })

    return(
        <>
        <TodoList data={filteredData} curTab={curTab}/>
        </>
    )
}