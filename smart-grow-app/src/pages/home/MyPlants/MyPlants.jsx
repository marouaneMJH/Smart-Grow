import React from 'react';
import Plants from '../../../components/Plant/Plant';
import Button from '../../../components/Button/Button';
import Header from '../../../components/Header/Header'


function Mylants(){
    return(
        <div className='my-plants'>
            <Header />

            <Plants />
            <Button />
            {/* <Button 
                content="add items"
            /> */}
        </div>
    )
}


export default Mylants;