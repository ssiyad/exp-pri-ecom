export class ValidationException extends Error {
    constructor(message: string) {
        super();
        this.message = message;
        this.name = 'ValidationError';
    }
}

