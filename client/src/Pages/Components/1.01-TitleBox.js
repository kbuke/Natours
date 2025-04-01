import logoWhite from "../../resources/imgs/logo-white.png"

export default function TitleBox(){
    return(
        <div className="header">
            <div className="logo-box">
                <img src={logoWhite} alt="Logo" className="logo"/>
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">
                        Outdoors
                    </span>

                    <span className="heading-primary-sub">
                        Is where life happens
                    </span>
                </h1>

                {/* two names for the className here */}
                <a href="#" className="btn btn-white">
                    Discover Our Tours
                </a>
            </div>
        </div>
    )
}