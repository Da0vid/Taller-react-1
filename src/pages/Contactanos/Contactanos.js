

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contactanos = () => {
    // Estado para el color de fondo
    const [colorFondo, setColorFondo] = useState('white');

    // useEffect para cambiar el color de fondo cada vez que colorFondo cambia
    useEffect(() => {
        document.body.style.backgroundColor = colorFondo;
    }, [colorFondo]);

    // Función para cambiar el color de fondo a negro
    const cambiarColorANegro = () => {
        setColorFondo('black');
    };

    return (
        <div className="container" style={{ color: colorFondo === 'black' ? 'white' : 'black' }}>
            <h1>Cambia la pagina a modo oscuro:</h1>
            <button onClick={cambiarColorANegro}>Modo Oscuro</button>
            
        </div> 
    );   
};

export default Contactanos;
