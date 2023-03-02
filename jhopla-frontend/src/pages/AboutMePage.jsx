import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useJhplContext } from '../context/JhplContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '../../node_modules/@fortawesome/fontawesome-svg-core';
import { fab } from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faPhone, faAt } from '../../node_modules/@fortawesome/free-solid-svg-icons'

library.add(fab, faPhone, faAt);

export const AboutMe = () => {

    const { getData, jhoplaData } = useJhplContext();

    useEffect(() => {
        getData();
    }, []);

    const fullname = jhoplaData.name + ' ' + jhoplaData.second_name + ' ' + jhoplaData.lastname + ' ' + jhoplaData.second_lastname;
    const nick = jhoplaData.nick;
    const ocupation = jhoplaData.ocupation;
    const desired = jhoplaData.desired_ocupation;
    const address = jhoplaData.address;
    const city = jhoplaData.city;
    const region = jhoplaData.region;
    const country = jhoplaData.country;
    const cellphone = jhoplaData.cellphone;
    const email = jhoplaData.email;
    const linkedin = jhoplaData.linkedin;
    const github = jhoplaData.github;

    return (
        <>
            <div className="about-me">
                <div className="personal-info">
                    <h5>¿Quién soy?</h5>
                    <p>Hola! soy {fullname}</p>
                    <p>Aunque mi nick es {nick}, es un placer conocerle!</p>
                    <p>Actualmente soy un {ocupation}, mi meta es poder ser un {desired}. Es lo que busco en una empresa.</p>
                </div>

                <div className="location-info">
                    <h5>¿De dónde soy?</h5>
                    <p>Actualmente vivo en {city}, {region}, {country}.</p>
                </div>

                <div className="contact-info">
                    <h5>¿Cómo me pueden contactar?</h5>
                    <p>Mis canales de <Link to={'/contact'}>Contacto</Link> son:</p>
                    <div className="contact-channels">
                        <div className="contact-email">
                            <FontAwesomeIcon icon={["fas", "at"]} />
                            <p>{email}</p>
                        </div>
                        <div className="contact-email">
                            <FontAwesomeIcon icon={["fas", "phone"]} />
                            <p>{cellphone}</p>
                        </div>
                        <div className="contact-email">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                            <p>{github}</p>
                        </div>
                        <div className="contact-email">
                            <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            <p>{linkedin}</p>
                        </div>
                    </div>
                    <p>Aunque también me pueden enviar un correo por este medio! (Sección de contacto)</p>
                </div>
                
                <div className="faqs-info">
                    <h5>FAQs</h5>                    
                    <div className="accordion" id="faqsAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿Qué buscas en una empresa?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqsAccordion">
                                <div className="accordion-body">
                                    Principalmente, busco un espacio en donde pueda crecer como desarrollador y como persona, 
                                    pudiendo, así, ser desarrollador frontend teniendo la oportunidad de trabajar junto a 
                                    desarrolladores backend para, finalmente, terminar siendo un desarrollador fullstack
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                ¿Qué tecnologías dominas?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqsAccordion">
                                <div className="accordion-body">
                                    Las tecnologías que más utilizo y domino, son, por parte del cliente: HTML, CSS, Bootstrap, JS, 
                                    React, Angular. <br />
                                    Por parte del servidor, serían: PHP, MySQL, Nodejs, Expressjs. <br />
                                    He trabajado con: jQuery, Laravel, Slimframework, Vuejs, Mongodb. <br />
                                    Pero, estas últimas tecnologías mencionadas, no tengo un nivel tan avanzado en conocmiento y práctica
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                ¿Desde hace cuánto eres desarrollador?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqsAccordion">
                                <div className="accordion-body">
                                    Comencé a trabajar como desarrollador el año 2017. En aquella época, estuve en una pequeña empresa 
                                    en la que, al ser pocos trabajadores, debíamos ser fullstack, preocupándonos del front y del back. <br />
                                    Ese mismo año, me di cuenta que mi fuerte ha sido el frontend, pero nunca descuidé mis ganas de aprender 
                                    a ser un mejor desarrollador backend.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
