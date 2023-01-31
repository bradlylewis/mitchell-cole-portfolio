import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                <div className="portfolio-item">
                    <a href="https://www.youtube.com/watch?v=lJOqrQ2X9zs" target="_blank" rel="noreferrer">
                        <img src="images/derelect_cover.png" alt="Derelict" />
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://www.youtube.com/watch?v=MjS93BRHf7k" target="_blank" rel="noreferrer">
                        <img src="images/lolc_cover.png" alt="LOLC" />
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://www.youtube.com/embed?v=L9xDZtGNVmE" target="" rel="noreferrer">
                        <img src="images/ctr_cover.png" alt="CTR" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;