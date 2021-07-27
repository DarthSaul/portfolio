import React from 'react';

import ContactItem from '../contact/ContactItem';

import contactInfo from '../../utilities/contactInfo';

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <div className='container row justify-content-center py-3 px-5 my-auto'>
                {contactInfo.map((item, ind) => (
                    <div
                        className='col-12 col-md-3 text-center py-3 my-auto'
                        key={ind}
                    >
                        <ContactItem icon={item.icon} link={item.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
