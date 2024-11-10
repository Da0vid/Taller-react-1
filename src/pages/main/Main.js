import { useEffect, useState } from 'react';
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {
    const url = `https://dog.ceo/api/breeds/image/random`;
    const [dogImage, setDogImage] = useState('');

    useEffect(() => {
        LoaderAllItems(setDogImage, url);
    }, [url]);

    return (
        <div className="main">
            <h1>Imagen Aleatoria de Perro</h1>
            {dogImage ? (
                <img src={dogImage} alt="Perro aleatorio" style={{ maxWidth: '300px', borderRadius: '8px' }} />
            ) : (
                <p>Cargando imagen...</p>
            )}
        </div>
    );
};

export default Main;
