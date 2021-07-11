export declare class Country {
    /**
     * ISO 3166-1 alpha-2 Country code. See https://www.iso.org/obp/ui/#search
     */
    isoName: string;
    /**
     * Full country name
     */
    name: string;
    /**
     * Account ISO-4217 3 letter currency code for the given country.
     * See https://www.iso.org/iso-4217-currency-codes.html
     */
    currencyCode: string;
    /**
     * Full currency name
     */
    currencyName: string;
    /**
     * Symbol of currency
     */
    currencySymbol: string;
    /**
     * Url of country flag image
     */
    flag: string;
    /**
     * Calling codes of the country
     */
    callingCodes: string[];
}
