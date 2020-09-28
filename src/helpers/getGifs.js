 const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=UD4L6HaHbswBlmjHLXv8LejGW6BsoaQl&q=${category}&limit=10`;
        const res = await fetch(url);
        const { data } = await res.json();

        const gif = data.map((img) => {//capturamos solo lo que necesitamos
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gif;//array
    }

    export default getGifs;