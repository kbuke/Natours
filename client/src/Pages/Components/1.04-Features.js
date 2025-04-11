import TitleBox from "./1.01-TitleBox"


export default function Features(){

    const featureBox = (specificIcon, h3Heading) => {
        return(
            <div className="col-1-of-4">
                <div className="feature-box">
                    <i className={`feature-box__icon icon-basic-${specificIcon}`}></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">{h3Heading}</h3>
                    <p className="feature-box__text">huhug8ygf7tf h8f8 f9g8f9 g8f8g8f868ffy iff8gf86 d7f886d7fy g86f8g8f86fg8g</p>
                </div>
            </div>
        )
    }

    return(
        <section className="section-features">
            <div className="row">
                {featureBox("world", "Explore the World")}
                {featureBox("compass", "Meet Nature")}
                {featureBox("map", "Find Your Way")}
                {featureBox("heart", "Live a Healthier Life")}
            </div>
        </section>
    )
}