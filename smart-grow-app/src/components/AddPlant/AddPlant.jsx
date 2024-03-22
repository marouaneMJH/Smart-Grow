import React from 'react';




function AddPlant() {

    return (
        <form style={
            {zIndex:1000,
            backgroundColor: "green",
            color: "white",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            }
        }>
            <label for="PLantName">Plant Name </label><br/>
            <input type="text"  id="PLantName" name="PLantName"/>
            <label for=" PlantCategory">Category</label><br/>
            <input type='select' id="PlantCategory" name="PlantCategory"/>
        </form>
    );
}

export default AddPlant;