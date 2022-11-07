import React, { useState, useEffect } from 'react';
import FriendRowComponent from './FriendRowComponent';
import PendingRowComponent from './PendingRowComponent';

function PendingTableComponent({ pendings }) {

    return (
        <>
            <div className="example2-table-height overflow-x-auto overflow-y-auto">

                <table className="table w-full">

                    <thead>

                        <tr>
                            <th className="text-yellow-900 bg-amber-500">Pending Requests</th>
                            <th className="text-yellow-900 bg-amber-500"></th>
                            <th className="text-yellow-900 bg-amber-500"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-amber-100">

                        {pendings && pendings.length && pendings.length > 0 ?
                            pendings.map((pending) => {
                                return (
                                    <PendingRowComponent
                                        key={pending['friend']['id']}
                                        pendingData={pending['friend']}
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
                                            <div className="font-bold" style={{color:'gray'}}>No Requests</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-success" style={{ marginRight: 5 }} disabled>No Requests</button>
                                </td>

                                <th>
                                    <button className="btn btn-ghost btn-xs" disabled>N/A</button>
                                </th>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PendingTableComponent;