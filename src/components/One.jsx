import React, { useState } from "react";
import axios from "axios";

export const One = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        status:"false",
    });

    const {username, email} = data;


    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit = () => {
        console.log(data);
        axios.post("http://localhost:3001/one",data);
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter username" name="username" value={username} onChange={handleChange} />
                    <br />
                    <br />
                    <input type="email" placeholder="enter email address" name="email" value={email} onChange={handleChange} />
                    <br />
                    <br />
                    <input type="submit"  />
                </form>
            </center>
        </div>
    )
}