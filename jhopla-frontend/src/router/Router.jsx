import { Route, Routes } from 'react-router-dom';
import { AboutMe, Contact, Index } from '../pages';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    )
}
