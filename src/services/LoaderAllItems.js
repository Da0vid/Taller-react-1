import axios from 'axios';

const LoaderAllItems = async (updateData, url) => {
    try {
        const res = await axios.get(url);
        updateData(res.data.message); // La API devuelve la URL de la imagen en `message`
    } catch (error) {
        console.error(error);
        updateData(''); // Deja `dogImage` vacío si ocurre un error
    }
};

export default LoaderAllItems;
