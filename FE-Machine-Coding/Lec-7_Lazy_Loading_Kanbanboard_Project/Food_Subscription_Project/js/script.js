import IntersectionObserverUtil from "../utils/lazyload.js";

const handleImageIntersection = (img) => {
    img.src = img.dataset.src;   
    img.onload = () =>{
        img.removeAttribute('data-src');
        // intersectionObserver.unobserve(img);
    }
}

const options = {
   threshold: 0.5,
   rootMargin: '200px',
}


const lazyLoadImages = () => {
    const intersectionObserver = new IntersectionObserverUtil(handleImageIntersection, options);

    const images = document.querySelectorAll("img[data-src]");

    console.log(images);

    images.forEach((image)=>{
        intersectionObserver.observe(image);
        //intersectionObserver.unobserve(image);
    });
}

lazyLoadImages();