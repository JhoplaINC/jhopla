import { useEffect } from 'react';
import { useJhplContext } from '../context/JhplContext'

export const Index = () => {

    const { getData, jhoplaData } = useJhplContext();

    useEffect(() => {
        getData();
    }, []);

    const fullname = jhoplaData.name + ' ' + jhoplaData.lastname;
    const nick = jhoplaData.nick;
    const ocupation = jhoplaData.ocupation;
    const desired = jhoplaData.desired_ocupation;
    const city = jhoplaData.city;
    const country = jhoplaData.country;

    return (
        <div className="jhpl-index">
            <h1>¡Hola mundo!</h1>

            <div className="jhpl-intro">
                <p>Mi nombre es {fullname}, pero me pueden encontrar en internet por mi nick: {nick}</p>
                <p>
                    Soy un {ocupation} aunque también he trabajado en proyectos o en algunos desarrollos como {desired}. aunque 
                    no es mi ocupación normal, es lo que quiero llegar a ser<br />
                    soy de {city}, {country}.
                </p>
                <p>A continuación, se pueden ver algunas herramientas que manejo y utilizo para crear sitios y aplicaciones web</p>
            </div>

            <div className="technologies">
                <div className="client-side-technologies">
                    <h3>Client side</h3>
                    <img src="images/html5.png" alt="html5" />
                    <img src="images/css.png" alt="css" />
                    <img src="images/bootstrap.png" alt="bootstrap" />
                    <img src="images/sass.png" alt="sass" />
                    <img src="images/javascript.png" alt="javascript" />
                    <img src="images/react.png" alt="reactjs" />
                    <img src="images/angular.png" alt="angularjs" />
                </div>

                <div className="server-side-technologies">
                    <h3>Server side</h3>
                    <img src="images/mysql.png" alt="mysql" />
                    <img src="images/node-express.png" alt="node-express" />
                    <img src="images/php.png" alt="php" />
                </div>

                <div className="api-technologies">
                    <h3>Api</h3>
                    <img src="images/restapi.png" alt="restapi" />
                </div>
            </div>
        </div>
    )
}
