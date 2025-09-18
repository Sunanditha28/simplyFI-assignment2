import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaEdit, FaTrash } from "react-icons/fa";
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md";
import "./UserCard.css";

function UserCard({ user, onDelete, onEdit }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="user-card">
      <div className="user-image">
        <img src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.username}&mood=happy`} alt={user.name} />
      </div>

      <div className="user-info p-3">
        <h5 className="fw-bold">{user.name}</h5>
        <p className="mb-2 text-secondary"><MdEmail /> {user.email}</p>
        <p className="mb-2 text-secondary"><MdPhone /> {user.phone}</p>
        <p className="mb-2 text-secondary"><MdLanguage /> {user.website}</p>
      </div>

      <div className="card-actions">
        <button onClick={() => setFavorite(!favorite)} className="text-danger">
          {favorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>

        <button onClick={onEdit} className="text-secondary">
          <FaEdit />
        </button>

        <button onClick={() => onDelete(user.id)} className="text-secondary">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default UserCard;
