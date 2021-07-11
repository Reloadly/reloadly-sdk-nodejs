/**
 * Class that contains the Tokens obtained after a call to the {@link AuthenticationAPI} methods.
 */
export class TokenHolder {
    access_token?: string;
    token_type: string;
    expires_in: bigint;
}
