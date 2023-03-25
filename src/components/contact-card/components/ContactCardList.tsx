import React from 'react';

import { useFetch } from '../../../helpers/useFetch';

import ContactCard from './ContactCard';

const url = 'https://random-data-api.com/api/v2/users?size=10&is_xml=true';


const ContactCardList = () => {

    const { data, error } = useFetch(url)

    if (error) {
        console.log(error)
    }

    return(
        <>
            {
                // @ts-ignore
                data?.map((contact: any) => (
                    <ContactCard
                        email = { contact?.email }
                        firstName = { contact?.first_name }
                        key = { contact?.id }
                        lastName = { contact?.last_name }
                        source = {{
                            uri: contact?.avatar
                        }} />
                ))
            }
        </>
    )

};

export default ContactCardList;
