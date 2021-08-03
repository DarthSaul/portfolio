import React from 'react';

import ContactItem from '../contact/ContactItem';

import contactInfo from '../../utilities/contactInfo';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    AOS.init();

    return (
        <div className='contact-wrapper'>
            <div className='container row justify-content-center py-3 px-5 my-auto'>
                {contactInfo.map((item, ind) => (
                    <div
                        className='col-12 col-md-3 text-center py-3 my-auto'
                        key={ind}
                        data-aos='fade-right'
                        data-aos-duration='1000'
                    >
                        <ContactItem icon={item.icon} link={item.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
