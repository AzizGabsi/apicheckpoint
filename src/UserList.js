import React from 'react'

const UserList = ({ user }) => {
    return (
        <div>
            <div > Name: {user.name} <br />
                Username: {user.username}</div>
            <div >
                <div /><h2> Email: {user.email}</h2></div>
            <div >
                <p> Street: {user.address.street}</p>
                <p> Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p> Zip Code:{user.address.zipcode}</p>
                <h3> GEO-Lat: {user.address.geo.lat}</h3>
                <h3>GEO-Lng: {user.address.geo.lng}</h3>
            </div>
            <div >
                <div>
                    <h4> Phone: {user.phone}</h4>
                    <h4> Website: {user.website}</h4>
                    <h5> Company: {user.company.name}</h5>
                    <h5> Catch Phrase: {user.company.catchPhrase}</h5>
                    <h5> BS: {user.company.bs}</h5>
                </div>
            </div>
        </div>

    )
}

export default UserList