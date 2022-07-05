import { faker } from '@faker-js/faker';
import { register } from "./service"

describe('auth/register', () => {
    test('valid data', async () => {
        const payload = {
            username: faker.datatype.string(),
            password: faker.datatype.string(),
            type: 'seller',
        }

        await register(payload);
    });

    test('duplicate user', async () => {
        const payload = {
            username: faker.datatype.string(),
            password: faker.datatype.string(),
            type: 'seller',
        }

        expect.assertions(1);

        try {
            await register(payload);
            await register(payload);
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    })
})

