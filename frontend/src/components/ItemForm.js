import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => {
    const [firstname, setfirstname] = useState('');
    const [middlename, setmiddlename] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone_num, setphone_num] = useState('');
    const [address, setaddress] = useState('');
    const [birthday, setbirthday] = useState('');
    const [age, setage] = useState('');
    const [place_of_birth, setplace_of_birth] = useState('');
    const [city, setcity] = useState('');
    const [gender, setgender] = useState('');
    const [religion, setreligion] = useState('');
    const [civil_status, setcivil_status] = useState('');
    const [citizenship, setcitizenship] = useState('');
    const [zip_code, setzip_code] = useState('');
    const [height, setheight] = useState('');
    const [weight, setweight] = useState('');
    const [blood_type, setblood_type] = useState('');
    const [mothers_maiden_firstname, setmothers_maiden_firstname] = useState('');
    const [mothers_maiden_surname, setmothers_maiden_surname] = useState('');
    const [father_firstname, setfather_firstname] = useState('');
    const [father_surname, setfather_surname] = useState('');
    const [father_occupation, setfather_occupation] = useState('');
    const [elementary_school, setelementary_school] = useState('');
    const [high_school, sethigh_school] = useState('');
    const [college, setcollege] = useState('');





    useEffect(() => {
        if (item) {
            setfirstname(item.firstname);
            setmiddlename(item.middlename);
            setlastname(item.lastname);
            setemail(setemail);
            setphone_num(setphone_num);
            setaddress(setaddress);
            setbirthday(setbirthday);
            setage(setage);
            setplace_of_birth(setplace_of_birth);
            setcity(setcity);
            setgender(setgender);
            setreligion(setreligion);
            setcivil_status(setcivil_status);
            setcitizenship(setcitizenship);
            setzip_code(setzip_code);
            setheight(setheight);
            setweight(setweight);
            setblood_type(setblood_type);
            setmothers_maiden_firstname(setmothers_maiden_firstname);
            setfather_firstname(setfather_firstname);
            setfather_surname(setfather_surname);
            setfather_occupation(setfather_occupation);
            setelementary_school(setelementary_school);
            sethigh_school(sethigh_school);
            setcollege(setcollege);

            
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { firstname, middlename, lastname , email, phone_num, address, birthday, age, place_of_birth, city ,gender, religion,civil_status,citizenship,zip_code,
            height,weight,blood_type, mothers_maiden_firstname, mothers_maiden_surname, father_firstname, father_surname,father_occupation, elementary_school, high_school, college,
        };
        try {    
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {    
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
       <form onSubmit={handleSubmit}>
        <p><b>&ensp; &emsp;PERSONAL INFORMATION</b></p>
           <div>
               <label>Firstname: </label>
               <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)}/>
            </div>
            <div>
               <label>Middlename: </label>
               <input typ="text" value={middlename} onChange={(e) => setmiddlename(e.target.value)}/>
            </div>
            <div>
            <label>Lastname: </label>
            <input type='text' value={lastname} onChange={(e) => setlastname(e.target.value)} />
            </div>
            <div>
               <label>Email: </label>
               <input type="text" value={email} onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div>
               <label>Phone number: </label>
               <input type="text" value={phone_num} onChange={(e) => setphone_num(e.target.value)}/>
            </div>
            <div>
            <label>Address: </label>
               <input type="text" value={address} onChange={(e) => setaddress(e.target.value)}/>
            </div>
            <div>
            <label>Birthday: </label>
               <input type="text" value={birthday} onChange={(e) => setbirthday(e.target.value)}/>
            </div>
            <div>
            <label>Age: </label>
               <input type="text" value={age} onChange={(e) => setage(e.target.value)}/>
            </div>
            <div>
            <label>Place of Birth: </label>
               <input type="text" value={place_of_birth} onChange={(e) => setplace_of_birth(e.target.value)}/>
            </div>
            <div>
            <label>City: </label>
               <input type="text" value={city} onChange={(e) => setcity(e.target.value)}/>
            </div>
            <div>
            <label>Gender: </label>
               <input type="text" value={gender} onChange={(e) => setgender(e.target.value)}/>
            </div>
            <div>
            <label>Religion: </label>
               <input type="text" value={religion} onChange={(e) => setreligion(e.target.value)}/>
            </div>
            <div>
            <label>Civil Status: </label>
               <input type="text" value={civil_status} onChange={(e) => setcivil_status(e.target.value)}/>
            </div>
            <div>
            <label>Citizenship: </label>
               <input type="text" value={citizenship} onChange={(e) => setcitizenship(e.target.value)}/>
            </div>
            <div>
            <label>Zip Code: </label>
               <input type="text" value={zip_code} onChange={(e) => setzip_code(e.target.value)}/>
            </div>
            <div>
            <label>Height: </label>
               <input type="text" value={height} onChange={(e) => setheight(e.target.value)}/>
            </div>
            <div>
            <label>Weight: </label>
               <input type="text" value={weight} onChange={(e) => setweight(e.target.value)}/>
            </div>
            <div>
            <label>Blood type: </label>
               <input type="text" value={blood_type} onChange={(e) => setblood_type(e.target.value)}/>
            </div>
            <p><b>&ensp; &emsp; FAMILY BACKGROUND</b></p>
            <div>
            <label>Mothers Maiden Firstname: </label>
               <input type="text" value={mothers_maiden_firstname} onChange={(e) => setmothers_maiden_firstname(e.target.value)}/>
            </div>
            <div>
            <label>Mothers Maiden Surname: </label>
               <input type="text" value={mothers_maiden_surname} onChange={(e) => setmothers_maiden_surname(e.target.value)}/>
            </div>
            <div>
            <label>Father Firstname: </label>
               <input type="text" value={father_firstname} onChange={(e) => setfather_firstname(e.target.value)}/>
            </div>
            <div>
            <label>Father Surname: </label>
               <input type="text" value={father_surname} onChange={(e) => setfather_surname(e.target.value)}/>
            </div>
            <div>
            <label>Father Occupation: </label>
               <input type="text" value={father_occupation} onChange={(e) => setfather_occupation(e.target.value)}/>
            </div>
            <p><b>&ensp; &emsp;NAME OF SCHOOL</b></p>
            <div>
            <label>Elementary School: </label>
               <input type="text" value={elementary_school} onChange={(e) => setelementary_school(e.target.value)}/>
            </div>
            <div>
            <label>High School: </label>
               <input type="text" value={high_school} onChange={(e) => sethigh_school(e.target.value)}/>
            </div>
            <div>
            <label>College: </label>
               <input type="text" value={college} onChange={(e) => setcollege(e.target.value)}/>
            </div>
            &ensp; &emsp;&ensp; &emsp;&ensp; &ensp; &emsp;
             <button type="submit">SUBMIT</button>
        </form>
    );

 };

 export default ItemForm;