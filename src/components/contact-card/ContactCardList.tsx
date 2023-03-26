import React, { ForwardedRef, forwardRef, Suspense, useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import SkeletonCard from '../skeleton/SkeletonCard';
import { useFetch } from '../../helpers/useFetch';

const ContactCard = React.lazy(() => import('./ContactCard'));


interface ContactCardListProps {
    ref: ForwardedRef<any>;
}

const ContactCardList = forwardRef((props:ContactCardListProps, ref: ForwardedRef<any>): JSX.Element => {
    // const [ changedItem, setChangedItem ] = useState();
    const [ size, setSize ] = useState(4)

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 75
    };

    const url = `https://random-data-api.com/api/v2/users?size=${ size }&is_xml=true`;
    const { data, loading } = useFetch(url)

    // Track what item changed regarding visibility
    // const onViewableItemsChanged = useCallback(({ changed }: any) => {
    //     changed.map((item: any) => {
    //         setChangedItem(item);
    //     })
    // }, [ viewabilityConfig ])
    //
    // console.log(changedItem, 'CHANGED ITEM')

    const loadMoreItems = useCallback(() => {
        setSize(size + 4);
    }, [ size ]);

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
                    onEndReached = { loadMoreItems }
                    ref = { ref }
                    renderItem = { renderItem }
                    viewabilityConfig = { viewabilityConfig } />
            </Suspense>
        </>
    )
});

export default ContactCardList;
