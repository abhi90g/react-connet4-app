import React from 'react';

const TableCell = ({col, index}) => {
    console.log('col props - ', col);
    let color = 'white';
    // if (value === 1) {
    //     color = 'red';
    // } else if (value === 2) {
    //     color = 'yellow';
    // }

    return(
        <td>
            <div className='cell' >
                <div className={color}></div>
            </div>
        </td>
        
    )
}

export default TableCell;