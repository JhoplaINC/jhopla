import { Route, Routes } from 'react-router-dom';
import { AboutMe, Contact } from '../pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    )
}
