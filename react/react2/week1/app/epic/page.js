"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const EpicImage = () => {
    const API_KEY = "JbH9XPKRiVMF09QvGZu3UiHpSSpx1w4mDianATiM";
    const [imageUrl, setImageUrl] = useState(null);
    const searchParams = useSearchParams();
    const date = searchParams.get("date"); // Get the 'date' from the query string

    useEffect(() => {
        if (date) {
            const fetchEpicImage = async () => {
                const [year, month, day] = date.split("-");
                const res = await fetch(
                    `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`
                );
                const data = await res.json();
                if (data.length > 0) {
                    const imageId = data[0].image;
                    const imageBaseUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageId}.png`;
                    setImageUrl(imageBaseUrl);
                }
            };

            fetchEpicImage();
        }
    }, [date]);

    if (!date) {
        return <p>Please provide a date using the query parameter (e.g., ?date=2024-08-17).</p>;
    }

    return (
        <div>
            <h1>NASA EPIC Image for {date}</h1>
            {imageUrl ? <img src={imageUrl} style={{ width: "50%" }} /> : <p>Loading image...</p>}
        </div>
    );
};

export default EpicImage;
