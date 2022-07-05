import { faker } from '@faker-js/faker';
import { register } from '../register/service';
import { login } from "./service"

describe('auth/login', () => {
    test('valid data', async () => {
        const payload = {
            username: faker.datatype.string(),
            password: faker.datatype.string(),
            type: 'seller',
        }

        await register(payload);

        const r = await login(payload);

        expect(r).toBeInstanceOf(String);
    });

    test('invalid data', async () => {
        const payload = {
            username: faker.datatype.string(),
            password: faker.datatype.string(),
            type: 'seller',
        }

        await register(payload);

        try {
            await login({
                username: payload.username,
                password: faker.datatype.string(),
            });
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    })
})

