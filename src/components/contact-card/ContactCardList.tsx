import React from 'react';

import { useFetch } from '../../helpers/useFetch';

import ContactCard from './ContactCard';

const url = 'https://random-data-api.com/api/v2/users?size=20&is_xml=true';


const ContactCardList = (): JSX.Element => {
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
                        address = { contact?.address }
                        email = { contact?.email }
                        employment = { contact?.employment }
                        firstName = { contact?.first_name }
                        key = { contact?.id }
                        lastName = { contact?.last_name }
                        phoneNumber = { contact?.phone_number }
                        source = {{
                            uri: contact?.avatar
                        }} />
                ))
            }
        </>
    )
};

export default ContactCardList;
