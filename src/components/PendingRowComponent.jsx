import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PendingRowComponent({ pendingData }) {

    const {id, username} = pendingData;

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
                    <button className="btn btn-success" style={{marginRight:5}}>Accept</button>
                    <button className="btn btn-error">Decline</button>
                </td>

                <th>
                    <Link to={`/readers/${id}`} className="btn btn-ghost btn-xs bg-gray-200">See Profile</Link>
                </th>
            </tr>
        </>
    )
}

export default PendingRowComponent;