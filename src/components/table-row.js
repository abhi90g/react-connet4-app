import React from 'react';
import TableCell from './table-cell';

const TableRow = ({row}) => {
    console.log('row props - ', row.map(x => x))
    return(
        <tr>
            {row.map((col, i) => <TableCell col={col} key={i} index={i} />)}
            {/* <TableCell /> */}
        </tr>
    )
}

export default TableRow;