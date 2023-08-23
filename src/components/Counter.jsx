import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/features/counter/counterSlice';


const Counter = () => {

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter)

    console.log(count);
    return (
        <div className='flex justify-center items-center min-h-screen gap-40'>
            <button className='bg-gradient-to-t from-red-900 to-rose-300 font-bold px-4 py-2 text-lg text-white rounded-sm'
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div>
                <h1 className='text-6xl font-black'>{count}</h1>
            </div>
            <button className='bg-gradient-to-t from-green-900 to-lime-300 font-bold px-4 py-2 text-lg text-white rounded-sm'
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    );
};

export default Counter; 