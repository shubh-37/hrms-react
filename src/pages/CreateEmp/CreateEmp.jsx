import React from "react";

export default function CreateEmp(){
    return (
        <React.Fragment>
            <form action="">
                <label htmlFor="">
                    Name of the candidate: 
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Job Title: 
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Job Location: 
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Job expiration date:
                    <input type="date" name="" id="" />
                </label>
                <label htmlFor="">
                    Base Salary: 
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    Signing Bonus: 
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    target Bonus:
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    number of  shares:
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    benefits offered:
                    <label htmlFor="">
                        health
                        <input type="checkbox" name="" id="" />
                    </label>
                    <label htmlFor="">
                        dental
                        <input type="checkbox" name="" id="" />
                    </label>
                    <label htmlFor="">
                        eye
                        <input type="checkbox" name="" id="" />
                    </label>
                    <label htmlFor="">
                        child-schooling
                        <input type="checkbox" name="" id="" />
                    </label>
                    <label htmlFor="">
                        rent
                        <input type="checkbox" name="" id="" />
                    </label>
                </label>
                <label htmlFor="">
                    <input type="submit" name="" id="" value="Create employee" />
                </label>
            </form>
        </React.Fragment>
    )
}