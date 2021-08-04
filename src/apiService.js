export const fetchPhotos = (namePhoto, num) => {

    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${namePhoto}&page=${num}&per_page=12&key=22768638-b34a0dc747ee3cff056840f2a`)
        .then((response) => response.json())
}
