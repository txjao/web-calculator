import React, { useState } from 'react';
import { Backspace, Divide, List, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Percent, Plus, PlusMinus, WifiNone, X } from 'phosphor-react';

interface keyboardProps {
    value: number,
    //simbol: 
}

export function Keyboard() {

    const [value, setValue] = useState(0);

 

    console.log(return (
        
        <div className='bg-slate-900 w-64 h-96 grid grid-cols-4 grid-rows-4 rounded gap-0 justify-center items-center p-5 py-10'>

            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <Backspace size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 2)}
            >
                <PlusMinus size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 3)}
            >
                <Percent size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 4)}
            >
                <Divide size={24} />
            </button>

            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 7)}
            >
                <NumberSeven size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 8)}
            >
                <NumberEight size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 9)}
            >
                <NumberNine size={24} />
            </button>

            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <X size={24} />
            </button>

            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 4)}
            >
                <NumberFour size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 5)}
            >
                <NumberFive size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 6)}
            >
                <NumberSix size={24} />
            </button>


            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <Minus size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <NumberOne size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 2)}
            >
                <NumberTwo size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 3)}
            >
                <NumberThree size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <Plus size={24} />
            </button>

            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <List size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <NumberZero size={24} />
            </button>
            <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(value + 1)}
            >
                <WifiNone size={24} />
            </button>

        </div>
    ));
}