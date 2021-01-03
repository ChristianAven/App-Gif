export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI( category )}&api_key=85w8k3MmDJeKpUhiJ22fYBwQ1xCSPRuG`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )
    return gifs;
};