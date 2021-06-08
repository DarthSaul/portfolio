import React from 'react';

import ContactItem from '../contact/ContactItem';

import contactInfo from '../../utilities/contactInfo';

const Contact = () => {
    return (
        <div className='contact-wrapper d-flex justify-content-center align-items-center py-3'>
            <div className='contact-inner d-flex flex-column justify-content-around align-items-center flex-xl-row'>
                {contactInfo.map((item, ind) => (
                    <ContactItem
                        key={ind}
                        imgUrl={item.backgroundImg}
                        icon={item.icon}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contact;
