import { useState } from "react";

interface buttonProps{
    operator: string,
    icon: object    
}

export function OperatorButton(props: buttonProps){
    const [operator, setOperator] = useState("");

    console.log(operator);

    return(
        <button className='bg-slate-700 hover:bg-slate-400 rounded-full flex justify-center items-center w-12 h-12'
                onClick={() => setOperator(props.operator)}
            >
                <>{props.icon}</>
            </button>
    );

}