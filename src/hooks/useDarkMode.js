import useLocalStorage from './uselocalStorage.js'
import {useEffect} from 'react';

const useDarkMode = (mode) =>{
    const [darkMode, setDarkMode] =useLocalStorage(mode)
    useEffect(()=>{
        const htmlBody = document.querySelector('body')
        if(darkMode){
            htmlBody.className = "dark-mode";
        }
        else{
            htmlBody.removeAttribute("class")
        }
    },[darkMode])
    return [darkMode, setDarkMode];
};

export default useDarkMode;