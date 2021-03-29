import React from 'react';
import { Table, Pagination, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Moment from 'react-moment';
import Loading from 'utils/loader';


const ProductsTable = ({
    prods, prev, next, gotoEdit
}) => {
    
    const goToPrevPage = (page) => {
        prev(page)
    }

    const goToNextPage = (page) => {
        next(page)
    }



    return(
        <>
            { prods && prods.docs ?
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Created</th>
                                <th>Model</th>
                                <th>Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            { prods.docs.map((item)=>(
                                <tr key={item._id}>
                                    <td><Moment to={item.date}></Moment></td>
                                    <td>{item.model}</td>
                                    <td>{item.available}</td>
                                    <td className="action_btn remove_btn"
                                        onClick={()=>alert('REMOVE')}
                                    >
                                        Remove
                                    </td>
                                    <td className="action_btn edit_btn"
                                        onClick={()=> gotoEdit(item._id)}
                                    >
                                        Edit
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                    <Pagination>
                        { prods.hasPrevPage ?
                            <>
                                <Pagination.Prev onClick={()=> goToPrevPage(prods.prevPage)}/>
                                <Pagination.Item onClick={()=>goToPrevPage(prods.prevPage)}>
                                    {prods.prevPage}
                                </Pagination.Item>
                            </>
                        :null}
                        <Pagination.Item active>{prods.page}</Pagination.Item>
                        { prods.hasNextPage ?
                            <>
                                
                                <Pagination.Item onClick={()=>goToNextPage(prods.nextPage)}>
                                    {prods.nextPage}
                                </Pagination.Item>
                                <Pagination.Next onClick={()=>goToNextPage(prods.nextPage)}/>
                            </>
                        :null}
                    </Pagination>
                    <hr/>
                    <LinkContainer to="/dashboard/admin/add_products">
                            <Button variant="secondary">Add product</Button>
                    </LinkContainer>    
                </>
                :
                <Loading/>
            }


        </>
    )


}

export default ProductsTable

