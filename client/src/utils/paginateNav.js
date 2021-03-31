import React from 'react';
import { Pagination, Button } from 'react-bootstrap';


const PaginationComponent = ({
    prods, prev, next, resetSearch
}) => {

    const goToPrevPage = (page) => {
        prev(page)
    }

    const goToNextPage = (page) => {
        next(page)
    }

    return(
        <>
            { prods.docs.length > 0 ?
                <Pagination>
                    { prods.hasPrevPage ? 
                    <>
                        <Pagination.Prev onClick={()=> goToPrevPage(prods.prevPage)}/>
                        <Pagination.Item onClick={()=> goToPrevPage(prods.prevPage)}>
                            {prods.prevPage}
                        </Pagination.Item>
                    </>
                    :null}
                    <Pagination.Item active> {prods.page} </Pagination.Item>
                    { prods.hasNextPage ? 
                    <>
                       <Pagination.Item onClick={()=> goToNextPage(prods.nextPage)}>
                            {prods.nextPage}
                        </Pagination.Item>
                        <Pagination.Next onClick={()=> goToPrevPage(prods.nextPage)}/>
                     
                    </>
                    :null}

                </Pagination>
    
            :
                <div>
                    <div>
                        Sorry nothing was found
                    </div>
                    <Button
                        className="mt-3"
                        variant="primary"
                        onClick={resetSearch}
                    >
                        Reset search
                    </Button>
                </div>
               
            }


        </>
    )

}


export default PaginationComponent;
