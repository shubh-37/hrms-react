import React from "react";
import { useState } from "react";

export default function SignUp(){
    const [user, setUser] = useState({
        userName : "",
        userEmail: "",
        userPassword: ""
    })

    const [org, setOrg] = useState({
        orgName: "",
        orgHq: "",
        orgSize: "",
        orgSite: ""
    })

    function handleUserChange(event){
        setUser((userDeet) => ({...userDeet, [event.target.name]: event.target.value}))
    }

    function handleOrgChange(event){
        setOrg((orgDeet) => ({...orgDeet, [event.target.name]: event.target.value}))
    }
    return (
        <React.Fragment>
            <header>Compensation of today, with a vision of tomorrow. VizComp.</header>
            <h2>User Details</h2>
            <div className="user-detail">
                <label htmlFor="user-name">Enter your name: 
                <input type="text" name="userName" onChange={handleUserChange}/></label>
                <label htmlFor="user-email">Enter your email:
                <input type="email" name ="userEmail"onChange={handleUserChange}/> </label>
                <label htmlFor="user-password">Enter your password: 
                <input type="password" name="userPassword" id="" onChange={handleUserChange}/></label>
            </div>
            <h2>Company Details</h2>
            <div className="company-detail">
                <label htmlFor="company-name">Enter the name of the Company: 
                <input type="text" name="orgName" id="" onChange={handleOrgChange}/></label>
                <label htmlFor="company-hq">Enter company's headquarter location: 
                <input type="text" name="orgHq" id="" onChange={handleOrgChange}/></label>
                <label htmlFor="company-site">Enter the company's website: 
                <input type="text" name="orgSite" id="" onChange={handleOrgChange}/></label>
                <label htmlFor="company-size">Enter company's size(Approx): 
                <input type="number" name="orgSize" id="" onChange={handleOrgChange}/></label>
            </div>
        </React.Fragment>
    )
}