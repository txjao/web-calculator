import React, { useState } from 'react';
import { ArrowSquareDown, Backspace, Divide, List, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Percent, Plus, PlusMinus, WifiNone, X } from 'phosphor-react';
import { NumberButton } from './NumberButton';
import { OperatorButton } from './OperatorButton';

interface NumberButton {
    value: number,
    symbol: object, 
}
interface OperatorButton {
    operator: number,
    icon: object, 
}

export function Keyboard() {
    return (
        <div className='bg-slate-900 w-64 h-96 grid grid-cols-4 grid-rows-4 rounded gap-0 justify-center items-center p-5 py-10'>

            <OperatorButton operator={"+-"} icon={<Backspace size={24} />}/>


            <OperatorButton operator={"+-"} icon={<PlusMinus size={24} />}/>
            <OperatorButton operator={"%"} icon={<Percent size={24} />}/>
            <OperatorButton operator={"/"} icon={<Divide size={24} />}/>

            <NumberButton value={7} symbol={<NumberSeven size={24} />}/>
            <NumberButton value={8} symbol={<NumberEight size={24} />}/>
            <NumberButton value={9} symbol={<NumberNine size={24} />}/>
            <OperatorButton operator={"*"} icon={<X size={24} />}/>

            <NumberButton value={4} symbol={<NumberFour size={24} />}/>
            <NumberButton value={5} symbol={<NumberFive size={24} />}/>
            <NumberButton value={6} symbol={<NumberSix size={24} />}/>
            <OperatorButton operator={"-"} icon={<Minus size={24} />}/>

            <NumberButton value={1} symbol={<NumberOne size={24} />}/>
            <NumberButton value={2} symbol={<NumberTwo size={24} />}/>
            <NumberButton value={3} symbol={<NumberThree size={24} />}/>
            <OperatorButton operator={"+"} icon={<Plus size={24} />}/>
                
            {/*botao do historico  */}
            <OperatorButton operator={"+-"} icon={<List size={24} />}/> 
            <NumberButton value={0} symbol={<NumberZero size={24} />}/>
            {/* Botao de decimal */}
            <OperatorButton operator={"+"} icon={<WifiNone size={24} />}/>


        </div>
    );
}