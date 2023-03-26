import React, { ForwardedRef, forwardRef, Suspense, useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import SkeletonCard from '../skeleton/SkeletonCard';

const ContactCard = React.lazy(() => import('./ContactCard'));

interface IContactCardListProps {
    data: any;
    loading: boolean
}

let viewabilityConfig = {
    itemVisiblePercentThreshold: 75
};

const ContactCardList = forwardRef((props: IContactCardListProps, ref: ForwardedRef<any>): JSX.Element => {
    const { data, loading } = props;
    const [ changedItem, setChangedItem ] = useState();

    const onViewableItemsChanged = useCallback(({ changed }: any) => {
        changed.map((item: any) => {
            setChangedItem(item);
        })
    }, [ viewabilityConfig ])

    console.log(changedItem, 'CHANGED ITEM')

    const renderItem = ({item}: any) => {
        if (loading) {
            return(
                <SkeletonCard key = { item?.id } />
            )
        }

        return(
            <ContactCard
                address = { item?.address }
                email = { item?.email }
                employment = { item?.employment }
                firstName = { item?.first_name }
                key = { item?.id }
                lastName = { item?.last_name }
                phoneNumber = { item?.phone_number }
                source = {{
                    uri: item?.avatar
                }} />
        )
    };

    return(
        <>
            <Suspense fallback = { null }>
                <FlatList
                    data = { data }
                    extraData = { data }
                    keyExtractor = { (item) => item.id }
                    onViewableItemsChanged = { onViewableItemsChanged }
                    ref = { ref }
                    renderItem = { renderItem }
                    viewabilityConfig = { viewabilityConfig } />
            </Suspense>
        </>
    )
});

export default ContactCardList;
