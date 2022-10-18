import { TodoList } from "../component/TodoList"


export const ThisMonth = ({data, curTab})=>{

    const filteredData = data.filter((data)=>{
        return data.deadline==='ThisMonth'
    })

    return(
        <>
        <TodoList data={filteredData} curTab={curTab}/>
        </>
    )
}