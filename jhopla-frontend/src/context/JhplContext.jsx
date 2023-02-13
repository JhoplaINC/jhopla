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

    const getData = async () => {
        try {
            const resp = await getJhplData();
            return resp.data[0];
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <JhoplaContext.Provider value={{getData}}>
            {children}
        </JhoplaContext.Provider>
    )
}
