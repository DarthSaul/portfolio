import React from 'react';

import ContactItem from '../contact/ContactItem';

import contactInfo from '../../utilities/contactInfo';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    AOS.init();

    return (
        <div className='contact-wrapper'>
            <div className='container'>
                {contactInfo.map((item, ind) => (
                    <div
                        className='contact-item'
                        key={ind}
                        data-aos='fade-left'
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
