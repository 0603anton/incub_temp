import React, {useState} from "react";

export default  {
    title: `React.memo demo`
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log(`counter`)
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log(`users`)
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () =>{

    const [counter,setCounter] = useState(10)
    const [users,setusers] = useState(['Anton','Anton','Anton','Anton'])

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}