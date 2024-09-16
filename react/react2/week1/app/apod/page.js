const API_KEY = "JbH9XPKRiVMF09QvGZu3UiHpSSpx1w4mDianATiM";

export default async function AstronomyPictureOfTheDay() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await res.json();

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date}</p>
            <img src={data.url} alt={data.title} />
            <p>{data.explanation}</p>
        </div>
    );
}
