import { CustomRequest } from "../../../node-sdk-core/src/Core";
import { IOAuth2ClientCredentialsRequest } from "./IOAuth2ClientCredentialsRequest";
import { TokenHolder } from "../Response/TokenHolder";
export declare class TokenRequest extends CustomRequest<TokenHolder> implements IOAuth2ClientCredentialsRequest {
    constructor(url: string);
    setAudience(audience: string): TokenRequest;
}
