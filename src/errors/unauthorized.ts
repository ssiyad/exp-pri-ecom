export class UnauthorizedException extends Error {
    constructor() {
        super();
        this.message = 'Unauthorized';
        this.name = 'UnauthorizedError';
    }
}

