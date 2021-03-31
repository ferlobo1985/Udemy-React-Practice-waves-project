import React from 'react';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const HistoryBlock = ({history}) => {

    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Products</th>
                        <th>Amount paid</th>
                        <th>Order ID</th>
                    </tr>
                </thead>
                <tbody>
                    { history.map((item)=>(
                        <tr key={item.transactionId}>
                            <td><Moment to={item.date}></Moment></td>
                            <td>
                                { item.items.map((article,i)=>(
                                    <div key={i}>{article.name}</div>
                                ))}
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.orderID}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}

export default HistoryBlock;
