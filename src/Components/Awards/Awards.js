import "./Awards.css"

const Awards = () => {
    const images = [
        "images/laurels/derelect_laurel_2021_award_of_commendation_canada_shorts_award.png",
        "images/laurels/derelect_laurel_2021_best_action_suspense_short_tallahassee_film_fest.png",
        "images/laurels/derelect_laurel_2021_best_actor_southern_film_fest.png",
        "images/laurels/derelect_laurel_2021_new_florida_cinema_winner_drama_white.png",
        "images/laurels/derelect_laurel_2021_official_selection_orlando_film_festival.png",
        "images/laurels/derelect_laurel_2021_tbuff_official_selection.png"
    ]

    return (
        <div id="awards-container">
            {images.map((image, index) => <img key={index} src={image} alt="award" className="award" width="100%" />
            )}
        </div>
    )
}

export default Awards;