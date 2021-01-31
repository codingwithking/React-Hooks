import React, { useState } from 'react'

function UpdateObjectState() {
    const [name, setName]= useState({firstName:'',lastName:''})
    return (
        <form>
            <input type='text' value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})}/>
            <input type='text' value={name.lastName}  onChange={(e)=> setName({...name,lastName:e.target.value})}/>
            <p>firstName is: {name.firstName}</p>
            <p>lastName is: {name.lastName}</p>
            <p>{JSON.stringify(name)}</p>
        </form>
    )
}

export default UpdateObjectState
