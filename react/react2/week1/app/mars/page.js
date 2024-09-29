"use client";

import { useEffect, useState } from "react";

const MarsPhotos = () => {
    const API_KEY = "JbH9XPKRiVMF09QvGZu3UiHpSSpx1w4mDianATiM";
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchMarsPhotos = async () => {
            const res = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`
            );
            const data = await res.json();
            setPhotos(data.photos);
        };

        fetchMarsPhotos();
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div>
            <h1>Mars Rover Photos</h1>
            <div>
                {photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.img_src} />
                        <p>{photo.rover.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarsPhotos;
