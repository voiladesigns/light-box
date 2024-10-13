import React from "react";
import Cell from "./Cell";
import "../App.css"
import { useState } from "react";


const matrix = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

const Grids = () => {
    const[order, setOrder] = useState([]);
    const[deactivating, setDeactivating] = useState(false)

    const activateCell = (index) => {
        // const [filled, setFilled] = useState(false);
    const newOrder = [...order, index];
    setOrder(newOrder);
    
    if(newOrder.length === matrix.flat(1).filter(Boolean).length)
        deactivateCells();
    }

    const deactivateCells = () => {
        setDeactivating(true);
        const timer = setInterval(()=>{
            setOrder((origOrd)=>{
                const newOrder = origOrd.slice();
                newOrder.pop();

                if(newOrder.length === 0){
                    clearInterval(timer);
                    setDeactivating(false);
                }
                return newOrder;
            })
        }, 300)
    }
    
    return(
        <div className="wrapper">
            <div className="grid"
                style={{
                    gridTemplateColumns:`repeat(${matrix[0].length},1fr)`
                }}
            >
                {matrix.flat(1).map((value, index)=>{
                    return(
                        value? <Cell 
                            key={index}
                            onClick={()=> activateCell(index)}
                            filled={order.includes(index)}
                            disabled = {order.includes(index) || deactivating}
                    />: <span/>      
                    )
                    
                }
                )}
            </div>
        </div>
    )
}

export default Grids;