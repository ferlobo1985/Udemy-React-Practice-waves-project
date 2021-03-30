import * as Yup from 'yup';

export const formValues = {
    model:'',
    brand:'',
    frets:'',
    woodtype:'',
    description:'',
    price:'',
    available:'',
    shipping:false,
    images:[]
}


export const getValuesToEdit = (product) => {
    return {
        model: product.model,
        brand: product.brand._id,
        frets: product.frets,
        woodtype:product.woodtype ,
        description:product.description,
        price:product.price,
        available:product.available,
        shipping:product.shipping,
        images:product.images
    }
}

export const validation = () => (
    Yup.object({
        model: Yup.string()
        .required('Sorry, the model is required'),
        brand: Yup.string()
        .required('Sorry, the brand is required'),
        frets: Yup.number()
        .required('Sorry, the frets is required')
        .oneOf([20,21,22,24],"Only 20,21,22,24 allowed"),
        woodtype:Yup.string()
        .required('Sorry, the woodtype is required'),
        description:Yup.string()
        .required('Sorry, the description is required'),
        price:Yup.number()
        .required('Must be a price')
        .min(1,'Sorry the min is 1')
        .max(100000,'Sorry its 500 max'),
        available:Yup.number()
        .required('Do we have stock ?'),
        shipping:Yup.boolean()
        .required('Do we offer shipping')
    })
)