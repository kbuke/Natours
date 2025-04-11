

export default function Tours(){
    const seaExplorerList = [
        "3 Day Tour",
        "Up to 30 People",
        "2 Tour Guides",
        "Sleep in Cozy Hotels",
        "Difficulty: Easy"
    ]

    const forestHikerList = [
        "7 Day Tour",
        "Up to 40 people",
        "6 Tour Guides",
        "Sleep in Provided Tents",
        "Difficulty: Medium"
    ]

    const snowAdventurerList = [
        "5 Day Tour",
        "Up to 15 People",
        "3 Tour Guides",
        "Sleep in Provided Tents",
        "Difficulty: Hard"
    ]

    const tourCards = (cardNo, heading, tourListArray) => {
        return(
            <div className="col-1-of-3">
                <div className="card">
                    {/*ONE SIDE OF THE CARD*/}
                    <div className="card__side card__side--front">
                        <div className={`card__picture card__picture--${cardNo}`}>
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            {/* {heading} */}
                            <span className={`card__heading-span card__heading-span-${cardNo}`}>
                                {heading}
                            </span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                {tourListArray?.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/*OTHER SIDE OF CARD*/}
                    <div className={`card__side card__side--back card__side--back-${cardNo}`}>

                    </div>
                </div>
            </div>
        )
    }

    return(
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Most Popular Tours</h2>
            </div>

            <div className="row">
                {tourCards("1", "The Sea Explorer", seaExplorerList)}
                {tourCards("2", "The Forest Hiker", forestHikerList)}
                {tourCards("3", "The Snow Adventurer", snowAdventurerList)}
            </div>
        </section>
    )
}