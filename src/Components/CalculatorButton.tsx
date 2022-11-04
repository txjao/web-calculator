import { useState } from "react";

interface buttonProps{
    value: string
    icon: object    
}

export function CalculatorButton(props: buttonProps){

    const [value, setValue] = useState("");

    return(
        <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setValue(props.value)}
            >
                <>{props.icon}</>
            </button>
    );
}