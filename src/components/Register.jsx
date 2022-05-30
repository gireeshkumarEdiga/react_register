import axios from "axios";
import React, { useState } from "react";

export const Register = () => {
    const [data,setData] = useState([])
    const [data1,setData1] = useState([])
    
    axios.get("http://localhost:3001/one")
    .then((res) => res.json())
    .then((res) => setData(res.one))

    axios.get("http://localhost:3001/two")
    .then((res) => res.json())
    .then((res) => setData(res.two))

    return (
        <div>
            {data.map((user) => (
                <div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                </div>)
            )}
            {data1.map((user) => (
                <div>
                    <div>{user.address}</div>
                    <div>{user.number}</div>
                </div>)
            )}
        </div>
    )
}