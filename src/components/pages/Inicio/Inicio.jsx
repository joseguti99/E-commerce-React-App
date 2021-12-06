import NavBarNav from '../../NavBarNav';
import { Card, CardTitle, CardText, CardImg, CardGroup, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import { SiWhatsapp, SiGithub } from "react-icons/si";

const Inicio =  () => {
    return ( 
        <>
        <div className="sticky-top">
            <NavBarNav/>
        </div>
        <div className="my-3 d-flex shadow">
            <Card body className="col-4 text-muted">
                <Link to="category/smartphone" className="text-decoration-none text-dark">
                <CardTitle tag="h3" className="title-chrismas">
                    CHRISTMAS DISCOUNT SMARTPHONE
                </CardTitle>
                <CardText tag="h3">
                        25% OFF
                </CardText>
                <div className="col-12 text-center">
                    <div>
                    <img className="col-3" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s21.png?raw=true"alt="s21"/>
                    <img className="col-3" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/mi11.png?raw=true"alt="mi11"/>
                    <img className="col-3" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g20.png?raw=true"alt="g20"/>
                    <img className="col-3" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9power.png?raw=true"alt="g9power"/>
                    </div>
                </div>
                </Link>
            </Card>
        </div>
        <div>
            <h3 className="text-center h2">OFFERS</h3>
            <CardGroup>
                <Card className="mx-4 shadow">
                    <Link to="item/APPLE-SERIE-3" className="text-decoration-none">
                        <CardImg
                            alt="Card image cap"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-watch-s3.png?raw=true"
                            top
                            width="50%"/>
                        <CardBody>
                            <CardTitle tag="h5" className="text-dark text-center">
                                Apple Serie 3
                            </CardTitle>
                                    <CardText className="text-dark text-center">
                                        With music streaming, faster dual-core processor, and watchOS 4
                                    </CardText>
                        </CardBody>
                    </Link>
                </Card>
                <Card className="mx-4 shadow">
                    <Link to="item/APPLE-WATCH-NIKE-AIR" className="text-decoration-none">
                        <CardImg
                            alt="Card image cap"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-nike.png?raw=true"
                            top
                            width="50%"/>
                        <CardBody>
                            <CardTitle tag="h5" className="text-dark text-center">
                                Apple Watch Nike-Air
                            </CardTitle>
                                    <CardText className="text-dark text-center">
                                    Get all your training data from your training. Without missing a tenth of a second.
                                    </CardText>
                        </CardBody>
                    </Link>
                </Card>
                <Card className="mx-4 shadow">
                    <Link to="item/GAMEPAD-PRO" className="text-decoration-none">
                        <CardImg
                            alt="Card image cap"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/gamepad.png?raw=true"
                            top
                            width="50%"/>
                        <CardBody>
                            <CardTitle tag="h5" className="text-dark text-center">
                                Gamepad Pro
                            </CardTitle>
                                    <CardText className="text-dark text-center">
                                        The GamePad Pro features Retro styling and brings it into the modern age with wireless functionality.
                                    </CardText>
                        </CardBody>
                    </Link>
                </Card>
                <Card className="mx-4 shadow">
                    <Link to="item/GALAXY-A52" className="text-decoration-none">
                        <CardImg
                            alt="Card image cap"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a52.png?raw=true"
                            top
                            width="50%"/>
                        <CardBody>
                            <CardTitle tag="h5" className="text-dark text-center">
                                Samsung Galaxy A52
                            </CardTitle>
                                    <CardText className="text-dark text-center">
                                    The Galaxy A52 has a quad-camera setup at the back consisting of a 64-megapixel.
                                    </CardText>
                        </CardBody>
                    </Link>
                </Card>
                <Card className="mx-4 shadow">
                    <Link to="item/GALAXY-NOTE-20" className="text-decoration-none">
                        <CardImg
                            alt="Card image cap"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/note20.png?raw=true"
                            top
                            width="50%"/>
                        <CardBody>
                            <CardTitle tag="h5" className="text-dark text-center">
                                Samsung Galaxy Note 20
                            </CardTitle>
                                    <CardText className="text-dark text-center">
                                    Note 20 funciona con un procesador Samsung Exynos 990 octa-core de 2.4GHz que cuenta con 4 núcleos a 2.4GHz y 4 núcleos a 1.8GHz.
                                    </CardText>
                        </CardBody>
                    </Link>
                </Card>
            </CardGroup>
        </div>

        <section className="page-section my-5">
        <div className="container bg-light shadow">
            <div className="text-center">
                <img className="col-2 rounded-pill my-3" src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/gift/perfil.png?raw=true" alt="" />
                <h2 className="section-heading text-uppercase">Thanks For Visiting Me!</h2>
                <h3 className="section-subheading text-muted">welcome you to my store, I am the creator of Cell-Store</h3>
            </div>
            <div className="row">
                <img src="" alt="" />
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Cell-Store is the final project of my course in React Js as a student of CoderHouse, in it I could develop my knowledge by translating it into an E-commerce store.</p>
                </div>
                <div className="col-12 text-center my-3">
                    <a href="https://wa.me/351910930426" rel="noreferrer" target="_blank" className="text-dark">
                    <SiWhatsapp className="h1 mx-4"></SiWhatsapp>
                    </a>
                    <a href="https://github.com/joseguti99" rel="noreferrer" target="_blank" className="text-dark">
                    <SiGithub className="h1 mx-4"></SiGithub>
                    </a>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Inicio;