
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const UserPreview = () => {
    const user = useSelector(selectUser);

    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>Welcome, {user?.name || 'Guest'}!</h2>
            {user?.profilePic && (
                <div className="card-3d">
                    <img src={user?.profilePic} alt="Avatar" style={{ width: '150px', borderRadius: '50%' }} />
                </div>
            )}

            <style>{`
        .card-3d {
          display: inline-block;
          transition: transform 0.3s;
          transform: perspective(500px) rotateY(10deg);
          filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.2));
        }
        .card-3d:hover {
          transform: perspective(500px) rotateY(0deg) scale(1.1);
        }
      `}</style>
        </div>
    );
};

export default UserPreview