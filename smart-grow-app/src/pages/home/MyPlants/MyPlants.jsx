import React from 'react';
import Plants from '../../../components/Plant/Plant';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header'


function MyPlants(){
    return(
        <div className='my-plants'>
            <Header />
            <Plants />
            <Button>Add item</Button>
        </div>
    )
}


export default MyPlants;