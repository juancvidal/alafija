const getImage = async () => {
    const apiKey = '8WhTtseU0fyK5vPiQsC84b5dsOT4bGIY';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(data.images.original.url)

}

getImage();