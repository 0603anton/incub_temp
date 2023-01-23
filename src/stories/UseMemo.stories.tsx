import React, {useCallback, useMemo, useState} from 'react';

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
    console.log(`компонент в котором всё вложено и преезтционный юзерс и контейнерный`)
    const [counter,setCounter] = useState(10)
    const [users,setusers] = useState(['Anton','Dima','Serg','Anton'])

    let newArray = useMemo(()=>{
       return  users.filter(u=>u.toLowerCase().indexOf(`a`) > -1)
    }, [users])

    const addUser = () => {
        setusers([...users,'sveta'])
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () =>{
    console.log(`LikeUseCallback`)
    const [counter,setCounter] = useState(10)
    const [books,setBooks] = useState(['React','JS','CSS','HTML'])

    // let newArray = useMemo(()=>{
    //     return  books.filter(u=>u.toLowerCase().indexOf(`a`) > -1)
    // }, [books])

    const addBook = () => {
        setBooks([...books,'Angular'+ new Date().getTime()])
    }

    const memorizedBooks = useMemo(()=>addBook,[books])
        // при изменении компоненты, функция добавления книги не пересоздаётся
        // важн овсегда правильно прописать зависимости иначе неверные данные будут
        // из-за того, что это юзмемо необходимо писать функцию которая возвращает функцию
    // пишем коллбэк который возвращает функцию(другой коллбэк) который надо запомнить
    // а вот юзколлбэк лишён этого недостатка. Мы туда просто функцию передаём и всё

    const memorizedBooks2 = useCallback(addBook,[books])// максимально простой синтаксис

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addBook}>+ add book</button>
        {counter}
        <Books  books={books} addBook={memorizedBooks2}/>
    </>
}

const BooksSecret = (props: { books: Array<string>; addBook:()=>void }) => {
    console.log(`Books презентационный, вложеннный в мемо - BOOKS SECRET`)
    return <div>
        <button onClick={()=> props.addBook}></button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)