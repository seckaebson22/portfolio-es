import React, {useState} from 'react'

const BackToTop = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        if(window.scrollY > 500){
            setShow(true);
            return;
        }
        setShow(false);
    }

    window.addEventListener('scroll', handleShow);

    const handleClick = (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='back-to-top' onClick={handleClick}>
            <div className={!show ? 'top' : 'top is-active'}>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
        </div>
    )
}

export default BackToTop