import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css'; 

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className="item-list-container">
            <h1>Items</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id}>
                        {item.firstname} : {item.middlename} : {item.lastname} : {item.email} : {item.phone_num} : {item.address} :
                        {item.birthday} : {item.age} : {item.place_of_birth} : {item.gender} : {item.religion} : {item.civil_status} : {item.citizenship} : 
                        {item.zip_code} : {item.height} : {item.weight} : {item.blood_type} : {item.mothers_maiden_firstname} :  {item.mothers_maiden_surname} :
                        {item.father_firstname} : {item.father_surname} : {item.father_occupation} : {item.elementary_school} : {item.high_school} : {item.college}
                        <div>
                            <button className="edit-button" onClick={() => onEdit(item)}> Edit </button>
                            <button className="delete-button" onClick={() => onDelete(item.id)}> Delete </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
