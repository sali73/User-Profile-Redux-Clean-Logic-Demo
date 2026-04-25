import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {userUpdate} from './userSlice';

export const UserForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(userUpdate({
            name: name,
            profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + name
        }));
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>User Settings</h3>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={submit}>Update Redux Store</button>
        </div>
    );
};
export default UserForm
