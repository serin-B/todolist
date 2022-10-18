import { TodoList } from "../component/TodoList"


export const ThisWeek = ({data, curTab})=>{

    const filteredData = data.filter((data)=>{
        return data.deadline==='ThisWeek'
    })

    return(
        <>
        <TodoList data={filteredData} curTab={curTab}/>
        </>
    )
}