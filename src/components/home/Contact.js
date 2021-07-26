import React from 'react';

import ContactItem from '../contact/ContactItem';

import contactInfo from '../../utilities/contactInfo';

const Contact = () => {
    return (
        <div className='contact-wrapper row justify-content-center py-3'>
            {contactInfo.map((item, ind) => (
                <div
                    className='col-sm-1 my-auto mx-4 mx-lg-3 text-center'
                    key={ind}
                >
                    <ContactItem icon={item.icon} link={item.link} />
                </div>
            ))}
        </div>
    );
};

export default Contact;
