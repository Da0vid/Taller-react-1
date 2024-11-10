import React from "react";
import Titulo from "../../Componentes/Titulo";
import Imgn from "../../Componentes/Imagen";
import Imgn2 from "../../Componentes/imagen2";
import Imagenes from "../../Componentes/Imagenes-main";
import Texto from "../../Componentes/Texto";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Titulo/>
            <Imgn/>
            <Texto/>
            <Imagenes/>
            <br/>
            <Imgn2/>
            
             </div> 
            )   
}

export default Home;