import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userUpdate, clearUser } from './userSlice';

export const UserForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (name.trim() === "") return;
        dispatch(userUpdate({
            name: name,
            profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + name
        }));
    };

    const handleClear = () => {
        dispatch(clearUser());
        setName('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h3>User Settings</h3>
            <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Redux Store</button>
            <button onClick={handleClear}>Clear</button>

        </div>
    );
};
export default UserForm
