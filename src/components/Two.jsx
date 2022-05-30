import React, { useState } from "react";
import axios from "axios";

export const Two = () => {
    const [data,setData] = useState({
        address:"",
        number:"",
        status:"false",
    });

    const {address, number} = data;

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit = () => {
        console.log(data);
        axios.post("http://localhost:3001/two",data);
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter your address" name="address" value={address} onChange={handleChange} />
                    <br />
                    <br />
                    <input type="number" placeholder="enter your number" name="number" value={number} onChange={handleChange} />
                    <br />
                    <br />
                    <input type="submit"  />
                </form>
            </center>
        </div>
    )
}