import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams ();

    const [friend, setFriend] = useState ({});

    useEffect ( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch (url)
        .then (res => res.json ())
        .then (data => setFriend (data))
    }, [])

    return (
        <div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing. {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>Website: {friend.website}</h5>
            {/* ekta object er bhetor r ekta object thakle ebhabe ternary operator diye neya jay */}
            <h6>Address: {friend.address?.city}</h6>
            <p>Lat : {friend.address?.geo?.lat}</p>
            <p>Lng: {friend.address?.geo?.lng}</p>
        </div>
    );
};

export default FriendDetail;