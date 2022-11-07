import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FriendRowComponent({ friendData }) {

    const {friend, current_book} = friendData;

    const {id, username} = friend;

    const {title, author} = current_book;

    return (
        <>
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="src/assets/blank-profile-photo.jpeg" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{username}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {title}
                    <br />
                    <span className="badge badge-ghost badge-sm">{author}</span>
                </td>

                <th>
                    <Link to={`/readers/${id}`} className="btn btn-ghost btn-xs">details</Link>
                </th>
            </tr>
        </>
    )
}

export default FriendRowComponent;