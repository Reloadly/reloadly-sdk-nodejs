import ReloadlyCore = require('@reloadly/reloadly.core');
import { IOAuth2ClientCredentialsRequest } from "./IOAuth2ClientCredentialsRequest";
import { TokenHolder } from "../Response/TokenHolder";

export class TokenRequest extends ReloadlyCore.CustomRequest<TokenHolder> implements IOAuth2ClientCredentialsRequest {

    constructor(url: string) {
        super(url, "POST", {}, {});
    }

    public setAudience(audience: string): TokenRequest {
        this.body["audience"] = audience;
        return this;
    }
}
