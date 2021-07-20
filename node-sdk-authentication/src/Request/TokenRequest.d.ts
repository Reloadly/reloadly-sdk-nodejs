import ReloadlyCore = require('@reloadly/reloadly.core');
import { IOAuth2ClientCredentialsRequest } from "./IOAuth2ClientCredentialsRequest";
import { TokenHolder } from "../Response/TokenHolder";
export declare class TokenRequest extends ReloadlyCore.CustomRequest<TokenHolder> implements IOAuth2ClientCredentialsRequest {
    constructor(url: string);
    setAudience(audience: string): TokenRequest;
}
