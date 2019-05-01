import * as PubSub from "pubsub-js";

export class ErrorHandler {
    publishErrors(response) {
        response.errors.forEach(error => PubSub.publish("validation-error", error));
    }

    static publishErrors(response) {
        response.errors.forEach(error => PubSub.publish("validation-error", error));
    }

    static statusCodes(response) {
        if (response.status === 400) {
            ErrorHandler.publishErrors(response);
            return;
        }

        if (response.status && response.status !== 200)
            throw new Error(response.statusText);

        return response;
    }

}
