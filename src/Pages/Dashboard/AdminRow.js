import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://laptop-parts-source-server-side.up.railway.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then(res => res.json())
            .then(data => {
                refetch();
                toast('Successfully')
            })
    }
    return (

        <tr className=''>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default AdminRow;
