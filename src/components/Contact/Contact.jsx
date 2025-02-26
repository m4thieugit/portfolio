import React from 'react';

import './Contact.css';

const Contact = () => {
    return (
        <div className="min-w-full col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 backdrop-blur-md rounded-3xl bg-gray-100 shadow-sm flex flex-col p-8 gap-10">
            <div className="item-title">
                <h2 className="md:text-4xl text-3xl text-gray-700">Contactez-moi</h2>
                <p className="text-lg text-gray-500">Les différents moyens de me contacter.</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-gray-200 rounded-md p-2">
                    <i className="fa-solid fa-envelope w-5"></i>
                    <a href="mailto:gallai_m@etna-alternance.net" alt="Mail">gallai_m@etna-alternance.net</a>
                </div>
                <div className="flex items-center gap-4 bg-gray-200 rounded-md p-2">
                    <i className="fa-solid fa-envelope w-5"></i>
                    <a href="mailto:mathieu.gallaisdechateaucroc@pvp.fr" alt="Mail">mathieu.gallaisdechateaucroc@pvp.fr</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
