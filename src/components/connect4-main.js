import React, { Component } from 'react';
import TableRow from './table-row';


export default class ConnectMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            table: []
        }
    }

    initilizeBoard() {
        console.log('start game');
        let table = [];
        for (let row = 0; row < 6; row++) {
            let rows = []
            for (let column = 0; column < 7; column++) {
                rows.push(null);
            }
            table.push(rows)
        }

        this.setState({
            table
        })

    }

    componentWillMount() {
        this.initilizeBoard();
    }

    render() {
        console.log(this.state.table)
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.table.map((r,i) => <TableRow row={r} key={i} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}