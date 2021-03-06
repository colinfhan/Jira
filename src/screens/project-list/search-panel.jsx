import React from "react"
import { useEffect, useState } from "react"

export const SearchPanel = ({users, param, setParam}) => {
    return <form action="">
        <input type="text" value={param.name} onChange={event => setParam({
            ...param,
            name: event.target.value
        })} />
        <select value={param.personId} onChange={event => setParam({
            ...param,
            personId: event.target.value
        })}>
            <option value={''}>All manager</option>
            {
                users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
            }
        </select>
    </form>
}