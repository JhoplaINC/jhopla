import { useEffect, useState } from 'react';
import { useJhplContext } from '../context/JhplContext';

export const AboutMe = () => {

    const { getData } = useJhplContext();

    const [data, setData] = useState({
        address: '',
        country: '',
        city: '',
        region: '',
        name: '',
        second_name: '',
        lastname: '',
        second_lastname: '',
        nick: '',
        ocupation: '',
        cellphone: '',
        email: '',
        github: '',
        linkedin: ''
    });

    useEffect(() => {
        const getJhplData = async () => {
            const data = await getData();
            setData({
                address: data.address,
                country: data.country,
                city: data.city,
                region: data.region,
                name: data.name,
                second_name: data.second_name,
                lastname: data.lastname,
                second_lastname: data.second_lastname,
                nick: data.nick,
                ocupation: data.ocupation,
                cellphone: data.cellphone,
                email: data.email,
                github: data.github,
                linkedin: data.linkedin
            })
            return data;
        }

        getJhplData();
    }, []);

    return (
        <ol>
            <li>{data.name}</li>
            <li>{data.second_name}</li>
            <li>{data.lastname}</li>
            <li>{data.second_lastname}</li>
            <li>{data.nick}</li>
            <li>{data.ocupation}</li>
            <li>{data.address}</li>
            <li>{data.city}</li>
            <li>{data.region}</li>
            <li>{data.country}</li>
            <li>{data.cellphone}</li>
            <li>{data.email}</li>
            <li>{data.linkedin}</li>
            <li>{data.github}</li>
        </ol>
    )
}
