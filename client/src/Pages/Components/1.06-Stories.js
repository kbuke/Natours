import personOnTour from "../../resources/imgs/nat-8.jpg"
import manOnMountain from "../../resources/imgs/nat-9.jpg"

import videoBg from "../../resources/imgs/video.mp4"
import videoWebm from "../../resources/imgs/video.webm"

export default function Stories({
    sectionHeading,
    standardButton
}){

    const defaultText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quo, quisquam natus officiis sed, ad provident consequuntur doloremque, repellendus temporibus quis assumenda dolorem! Repudiandae porro consequatur laudantium alias, id necessitatibus."

    const storyContainer = (storyImg, imgAlt, storyTitle, storyText, storyName) => {
        return(
            <div className="story">
                {/* figure is best for img-caption combo */}
                <figure className="story__shape">
                    <img src={storyImg} alt={imgAlt} className="story__img" />
                    {/* captions for fig */}
                    <figcaption className="story__caption">{storyName}</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">{storyTitle}</h3>
                    <p>
                        {storyText}
                    </p>
                </div>
            </div>
        )
    }
    return(
        <section className="section-stories">

            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    {/* need these two formats to ensure it works across browser */}
                    <source src={videoBg} type="video/mp4"/>
                    <source src={videoWebm} type="video.webm"/>
                    {/* Shows below text is vids cant be played */}
                    Your browser is not supported
                </video>
            </div>

            {sectionHeading("We Make People Genuinely Happy")}
            <div className="row">
                {storyContainer(personOnTour, "Person on tour", "I Had the best week ever with my family", defaultText, "Mary Smith")}
            </div>

            <div className="row">
                {storyContainer(manOnMountain, "Man on Mountain", "Wow, My Life Is Completely Different Now", defaultText, "Jack Wilson")}
            </div>

            {/* //u2192 represents the arrow in unicode */}
            {standardButton("Read All Stroies \u2192", "btn-text",)}
        </section>
    )
}