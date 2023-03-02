import { createContext, useContext, useState } from 'react';
import { getJhplData } from '../API/jhopla.api.js';

export const JhoplaContext = createContext();

export const useJhplContext = () => {
    const context = useContext(JhoplaContext);
    if(!context) {
        throw new Error('You are not inside our context :(');
    }
    return context;
}

export const JhplContextProvider = ({children}) => {

    const [jhoplaData, setJhoplaData] = useState({});

    const getData = async () => {
        try {
            const resp = await getJhplData();
            const jhpl_data = resp.data[0];
            setJhoplaData({
                address : jhpl_data.address,
                cellphone : jhpl_data.cellphone,
                city : jhpl_data.city,
                country : jhpl_data.country,
                desired_ocupation : jhpl_data.desired_ocupation,
                email : jhpl_data.email,
                github : jhpl_data.github,
                id : jhpl_data.id,
                lastname : jhpl_data.lastname,
                linkedin : jhpl_data.linkedin,
                name : jhpl_data.name,
                nick : jhpl_data.nick,
                ocupation : jhpl_data.ocupation,
                region : jhpl_data.region,
                second_lastname : jhpl_data.second_lastname,
                second_name : jhpl_data.second_name,
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <JhoplaContext.Provider value={{jhoplaData, getData}}>
            {children}
        </JhoplaContext.Provider>
    )
}
