import React from "react";
import "../App.css"

const Cell = ({onClick, filled}) => {
    return(
        <button
            onClick={onClick}
            className={filled ? "cell cell-activated" : "cell"}
        />
    )
}
export default Cell;