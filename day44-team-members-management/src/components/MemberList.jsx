import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMember } from '../redux/action';

// *
// This component contains a normal useSelector processing
// select our global data from the reducer file and return it using
// map function
// *

function MemberList({setEditMember}) {
    const members = useSelector(state => state.members);
    const dispatch = useDispatch();
  return (
    <div className='mt-8'>
        <h2 className='text-lg text-center font-semibold mb-3'>Team members</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
                members.map(data => (
                    <div className='p-6 bg-white rounded shadow-md' key={data.id}>
                        <h3>{data.name}</h3>
                        <h4>{data.email}</h4>
                        <p>{data.role}</p>
                        <div className='flex flex-col mt-3 gap-2'>
                            <button className='bg-blue-100 font-semibold cursor-pointer px-2 py-1' onClick={() => setEditMember(data)}>Edit</button>
                            <button className='bg-blue-100 font-semibold cursor-pointer px-2 py-1' onClick={() => dispatch(deleteMember(data.id))}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MemberList