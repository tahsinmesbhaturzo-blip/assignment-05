import type { TechnologiesType } from "./Type";
import use, { useState } from "react"
interface Technologies{
TechnologiesPromise:Promise<TechnologiesType[]>
}
const Technologies = ({TechnologiesPromise}:Technologies) => {
    const Pera = use(TechnologiesPromise)
    console.log(Pera)
    return (
        <div>
            
        </div>
    );
};

export default Technologies ;