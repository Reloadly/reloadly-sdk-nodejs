export class TestCredentials {

    public static ClientId(): string {
        return process.env.CLIENT_ID;
    }

    public static ClientSecret(): string {
        return process.env.CLIENT_SECRET;
    }
}

