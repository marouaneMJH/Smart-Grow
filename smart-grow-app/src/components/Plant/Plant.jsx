import React from "react";
import { PLANTS } from "./Plants";
import "./Plant.css";

function Plant(plant) {
    return (
            <div className="plant">
                <div className="plant-image-container">
                    <img src={plant.img} alt={plant.name} />
                </div>
                <div className="plant-info">
                    <div className="plant-name">
                        <p>{plant.name}</p>
                    </div>
                    <div className="plant-info-container">
                        <div className="plant-info-item">
                            <p>Humidity</p>
                            <p>{plant.humidity}%</p>
                        </div>
                        <div className="plant-info-item">
                            <p>Temperature</p>
                            <p>{plant.temperature}°C</p>
                        </div>
                    </div>
                </div>
            </div>

    );
}

function Plants() {
    return <div className="Plants">{PLANTS.map((plant, index) => <Plant key={index} {...plant} />)}</div>;
}


export default Plants;
