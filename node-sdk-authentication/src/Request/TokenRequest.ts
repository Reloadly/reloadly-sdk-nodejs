import { CustomRequest } from "../../../node-sdk-core/src/Core";
import { IOAuth2ClientCredentialsRequest } from "./IOAuth2ClientCredentialsRequest";
import { TokenHolder } from "../Response/TokenHolder";

export class TokenRequest extends CustomRequest<TokenHolder> implements IOAuth2ClientCredentialsRequest {

    constructor(url: string) {
        super(url, "POST", {}, {});
    }

    public setAudience(audience: string): TokenRequest {
        this.body["audience"] = audience;
        return this;
    }
}
