

export default function Tours(){

    const tourCards = (cardImg, pictureNo, cardNo) => {
        return(
            <div className="col-1-of-3">
                <div className="card">
                    {/*ONE SIDE OF THE CARD*/}
                    <div className="card__side card__side--front">
                        <div className={`card__picture card__picture--${pictureNo}`}>
                            &nbsp;
                        </div>
                        <div className="card__heading">

                        </div>
                        <div className="card__details">

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
                {tourCards("Card 1", "1", "1")}
                {tourCards("Card 2", "2", "2")}
                {tourCards("Card 3", "3", "3")}
            </div>
        </section>
    )
}