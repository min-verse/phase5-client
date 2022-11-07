import React, { useState, useEffect } from 'react';
import FriendRowComponent from './FriendRowComponent';

function FriendTableComponent({ friends }) {

    return (
        <>
            <div className="example-table-height overflow-x-auto overflow-y-auto">

                <table className="table w-full">

                    <thead>

                        <tr>
                            <th className="text-blue-900 bg-blue-300">Friend</th>
                            <th className="text-blue-900 bg-blue-300">Currently Reading</th>
                            <th className="text-blue-900 bg-blue-300"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-100">

                        {friends && friends.length && friends.length > 0 ?

                            friends.map((friend) => {
                                return (
                                    <FriendRowComponent
                                        key={friend['friend']['id']}
                                        friendData={friend}
                                    />
                                )
                            })

                            :

                            <tr>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="src/assets/blank-profile-photo.jpeg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold" style={{color:'gray'}} disabled>No friend added</div>

                                        </div>
                                    </div>
                                </td>
                                <td  style={{color:'gray'}}>
                                    None added
                                    <br />
                                    <span  style={{color:'gray'}} className="badge badge-ghost badge-sm" disabled>None added</span>
                                </td>

                                <th>
                                    <button  style={{color:'gray'}} className="btn btn-ghost btn-xs" disabled>details</button>
                                </th>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FriendTableComponent;