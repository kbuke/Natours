import logoWhite from "../../resources/imgs/logo-white.png"

export default function TitleBox(){
    return(
        <div className="header">
            <div className="header__logo-box">
                <img src={logoWhite} alt="Logo" className="header__logo"/>
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">
                        Outdoors
                    </span>

                    <span className="heading-primary--sub">
                        Is where life happens
                    </span>
                </h1>

                {/* two names for the className here */}
                <a href="#" className="btn btn--white btn--animated">
                    Discover Our Tours
                </a>
            </div>
        </div>
    )
}