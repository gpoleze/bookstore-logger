import * as PubSub from "pubsub-js";

export class ErrorHandler {
    publishErrors(response) {
        response.errors.forEach(error => PubSub.publish("validation-error", error));
    }
}
