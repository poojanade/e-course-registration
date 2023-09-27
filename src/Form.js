import React, { useState } from 'react'

const Form = () => {

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        dob: "",
        gender: "",
        status: "",
        Mob: "",
        add: "",
        country: "",
        state: "",
        pin: "",

    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = ({ ...userRegistration, id: new Date().getTime().toString() });

        setRecords([records, newRecord]);

        setUserRegistration({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            dob: "",
            gender: "",
            status: "",
            Mob: "",
            add: "",
            country: "",
            state: "",
            pin: "",

        });

    }

    return (
        <>
            <form action='' onSubmit={handleSubmit}>
                <table>
                    <h1 >Registration Form</h1>
                    <tbody>
                        <thead><label htmlFor="name">Name:</label></thead>
                        <td><input type="text" autoComplete='off' name="name" id="name"
                            value={userRegistration.name}
                            onChange={handleInput}
                            placeholder="Enter  Name" required /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="em">Email:</label></thead>
                        <td><input type="text" autoComplete='off' name="email" id="em"
                            value={userRegistration.email}
                            onChange={handleInput}
                            placeholder="Enter  Email" required /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="password">Password:</label></thead>
                        <td><input type="password" id="password" autoComplete='off' name="password"
                            value={userRegistration.pass}
                            onChange={handleInput}
                            placeholder="Enter your Password" /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="confirmpassword">Confirm Password:</label></thead>
                        <td><input type="password" id="confirmpassword" autoComplete='off' name="confirmpassword"
                            value={userRegistration.confirmpassword}
                            onChange={handleInput}
                            placeholder="Enter your Confirm Password" /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="dob">Date Of Birth:</label></thead>
                        <td> <input type="date"
                            autoComplete='off' name="dob" id="dob"
                            value={userRegistration.dob}
                            onChange={handleInput} required /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="gender">Select Gender</label></thead>
                        <td>
                            <select
                                autoComplete='off' name="gender" id="gender" value={userRegistration.gender}
                                onChange={handleInput} required>
                                <option value="gender"></option>
                                <option value="India">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other's</option>
                            </select>
                        </td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="status">Marital Status</label></thead>
                        <td>
                            <select
                                autoComplete='off' name="status" id="status"
                                value={userRegistration.status}
                                onChange={handleInput} required>
                                <option value=""></option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                            </select>
                        </td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="Mob">Mobile Number:</label></thead>
                        <td><input type="number"
                            autoComplete='off' name="Mob" id="Mob"
                            value={userRegistration.Mob}
                            onChange={handleInput}
                            placeholder="Enter Mobile No" required /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="add">add:</label></thead>
                        <td><textarea autoComplete='off' name="add" id="add"
                            value={userRegistration.add}
                            onChange={handleInput}
                            placeholder="Enter Full Address" required /></td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="country">Select Country</label></thead>
                        <td>
                            <select
                                autoComplete='off' name="country" id="country"
                                value={userRegistration.country}
                                onChange={handleInput} required>
                                <option value=""></option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Russia">Russia</option>
                            </select>
                        </td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="state">Select State</label></thead>
                        <td>
                            <select
                                autoComplete='off' name="state" id="state" value={userRegistration.state}
                                onChange={handleInput} required>
                                <option value=""></option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="New Delhi">New Delhi</option>
                            </select>
                        </td>
                    </tbody>
                    <tbody>
                        <thead><label htmlFor="pin">Pin-code</label></thead>
                        <td><input type="number"
                            autoComplete='off' name="pin" id="pin"
                            value={userRegistration.pin}
                            onChange={handleInput}
                            placeholder='Enter Code' /></td>
                    </tbody>
                    <tbody>
                        <td> <button type="submit">Registration</button></td>
                    </tbody>
                </table>
            </form>
            <div>
                {
                    records.map((curElem, index) => {
                        return (
                            <div className='showData' key={index}>
                                <p>Name: {curElem.name}, Email:{curElem.email},
                                    Password:{curElem.password},  Confirm Password: {curElem.confirmpassword},
                                    Date Of Birth:{curElem.dob}, Gender:{curElem.gender}, Status:{curElem.status},
                                    Mobile Number:{curElem.Mob}, Address:{curElem.add}, Country:{curElem.country},
                                    State:{curElem.state}, Pincode:{curElem.pin}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form
