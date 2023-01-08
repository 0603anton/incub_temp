import React, {useMemo, useState} from 'react';

export default {
    title: `useMemo`
}
export const Example2 = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1_000_000_00) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>


        <hr/>
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log(`users презентационный, вложеннный в мемо`)
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () =>{
    console.log(`компонент в котором всё вложено и преезтционный юзерси контейнерный`)
    const [counter,setCounter] = useState(10)
    const [users,setusers] = useState(['Anton','Dima','Serg','Anton'])

    let newArray = useMemo(()=>{
       return  users.filter(u=>u.toLowerCase().indexOf(`a`) > -1)
    }, [users])

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}