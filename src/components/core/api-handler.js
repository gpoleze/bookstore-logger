import {ErrorHandler} from "./error-handler";

const API = 'http://localhost:8080/api';

export function apiGet(service) {
    return fetch(API + service, {method: 'GET'})
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function apiPost(service, data) {
    console.log(data);


    return fetch(API + service,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
            credentials: "same-origin"
        })
        .then(response => response.json())
        .then(ErrorHandler.statusCodes)
        .catch(err => console.log('Error while attempting to post:', err));
}
