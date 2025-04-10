
import aboutImg1 from "../../resources/imgs/nat-1-large.jpg"
import aboutImg2 from "../../resources/imgs/nat-2-large.jpg"
import aboutImg3 from "../../resources/imgs/nat-3-large.jpg"    

export default function About(){
    return(
        <section class="section-about">
            <div class="u-center-text u-margin-bottom-big"> {/* Give this class 2 names */}
                <h2 class="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        You're going to fall in love with nature
                    </h3>

                    <p className="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laudantium accusamus quod sint enim neque doloribus mollitia, animi in voluptatum aspernatur? Ut recusandae fugit ab iusto tempora aliquam, hic at.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Live adventures like you never have before
                    </h3>

                    <p className="paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laudantium accusamus quod sint enim neque doloribus mollitia, animi in voluptatum aspernatur? Ut recusandae fugit ab iusto tempora aliquam, hic at.
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>{/* This &rarr is special html code */}
                </div>
                <div class="col-1-of-2">
                    {
                        /* 
                            emmet allows shorthand by putting
                            .composition>(img.composition__photo.composition__photo--p1)*3 
                        */
                    }
                    <div className="composition">
                        <img src={aboutImg1} alt="Photo 1" className="composition__photo composition__photo--p1" />
                        <img src={aboutImg2} alt="Photo 2" className="composition__photo composition__photo--p2" />
                        <img src={aboutImg3} alt="Photo 3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}