
import TitleBox from "./Components/1.01-TitleBox"
// import TestGrid from "./Components/1.02-TestGrid"
import About from "./Components/1.03-About"
import Features from "./Components/1.04-Features"
import Tours from "./Components/1.05-Tours"
import Stories from "./Components/1.06-Stories"
import Booking from "./Components/1.07-Booking"

export default function Natours(){

    const sectionHeading = (headingTitle) => {
        return(
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    {headingTitle}
                </h2>
            </div>
        )
    }

    const standardButton = (buttonText, classTitle) => {
        return(
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className={classTitle}>
                    {buttonText} 
                </a>
            </div>
        )
    }

    return(
        <div>
            <TitleBox />
            {/* <TestGrid /> */}
            <main>
                <About 
                    sectionHeading={sectionHeading}
                />
                <Features />
                <Tours 
                    sectionHeading={sectionHeading}
                />
                <Stories 
                    sectionHeading={sectionHeading}
                    standardButton={standardButton}
                />
                <Booking />
            </main>
        </div>
    )
}