import React, { useState } from 'react';
import { ArrowSquareDown, Backspace, Divide, List, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Percent, Plus, PlusMinus, WifiNone, X } from 'phosphor-react';
import { CalculatorButton } from './CalculatorButton';
import { NumberContext } from '../Contexts/NumberContext';

interface CalculatorButton {
    value: number,
    icon: object,
}

export function Keyboard() {


    


    return (
        <div className='bg-slate-900 w-64 h-96 grid grid-cols-4 grid-rows-4 rounded gap-0 justify-center items-center p-5 py-10'>
                <CalculatorButton value={"+-"} icon={<Backspace size={24} />} />

                <CalculatorButton value={"+-"} icon={<PlusMinus size={24} />} />
                <CalculatorButton value={"%"} icon={<Percent size={24} />} />
                <CalculatorButton value={"/"} icon={<Divide size={24} />} />

                <CalculatorButton value={"7"} icon={<NumberSeven size={24} />} />
                <CalculatorButton value={"8"} icon={<NumberEight size={24} />} />
                <CalculatorButton value={"9"} icon={<NumberNine size={24} />} />
                <CalculatorButton value={"*"} icon={<X size={24} />} />

                <CalculatorButton value={"4"} icon={<NumberFour size={24} />} />
                <CalculatorButton value={"5"} icon={<NumberFive size={24} />} />
                <CalculatorButton value={"6"} icon={<NumberSix size={24} />} />
                <CalculatorButton value={"-"} icon={<Minus size={24} />} />

                <CalculatorButton value={"1"} icon={<NumberOne size={24} />} />
                <CalculatorButton value={"2"} icon={<NumberTwo size={24} />} />
                <CalculatorButton value={"3"} icon={<NumberThree size={24} />} />
                <CalculatorButton value={"+"} icon={<Plus size={24} />} />

                {/*botao do historico  */}
                <CalculatorButton value={"+-"} icon={<List size={24} />} />
                <CalculatorButton value={"0"} icon={<NumberZero size={24} />} />
                {/* Botao de decimal */}
                <CalculatorButton value={"+"} icon={<WifiNone size={24} />} />

        </div>
    );
}