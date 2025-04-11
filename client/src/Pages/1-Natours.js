
import TitleBox from "./Components/1.01-TitleBox"
// import TestGrid from "./Components/1.02-TestGrid"
import About from "./Components/1.03-About"
import Features from "./Components/1.04-Features"
import Tours from "./Components/1.05-Tours"

export default function Natours(){
    return(
        <div>
            <TitleBox />
            {/* <TestGrid /> */}
            <main>
                <About />
                <Features />
                <Tours />
            </main>
        </div>
    )
}