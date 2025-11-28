import axios from "axios"

const fetchTopAlbums = async () => {
    try {
        const res = await axios.get("https://qtify-backend.labs.crio.do/albums/top")
        return res.data;
    } catch (error) {
        console.error("Error fetching top albums", error);
    }
}


export { fetchTopAlbums };