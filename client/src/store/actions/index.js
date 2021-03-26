import {
    MY_DOG
} from '../types';



export const myDog = () => {

    const dogVars = {
        barks:'yes'
    }


    return {
        type: MY_DOG,
        payload: dogVars
    }

}