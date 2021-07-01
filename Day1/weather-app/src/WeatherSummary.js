function WeatherSummary ({cityData}) {
    return (
        <div className="container-fluid">
        <Hero/>
        <WeatherSummary {...cityData} />
        <Footer/>
        </div>
    );
}

export default CityWeather;