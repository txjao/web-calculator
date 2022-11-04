import { useState } from "react";

interface buttonProps{
    value: number,
    symbol: object    
}

export function NumberButton(props: buttonProps){
    const [value, setValue] = useState(0);

    console.log(value);

    return(
        <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(props.value)}
            >
                <>{props.symbol}</>
            </button>
    );
}