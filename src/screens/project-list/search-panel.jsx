import { useEffect, useState } from "react"

export const SearchPanel = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [users, setUsers] = UseState([])
    const [list, setList] = useState([])
    
    useEffect(() => {
        fetch('').then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    return <form action="">
        <input type="text" value={param.name} onChange={event => setParam({
            ...param,
            name: event.target.value
        })} />
        <select value={param.personId} onChange={event => setParam({
            ...param,
            personId: event.target.value
        })}>
            <option value={''}>Manager</option>
            {
                users.map(user => <option value={user.id}>{user.name}</option>)
            }
        </select>
    </form>
}