export interface Countries {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    BGN?: Aed;
    FKP?: Aed;
    SYP?: Aed;
    BYN?: Aed;
    INR?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    EUR?: Aed;
    MKD?: Aed;
    TJS?: Aed;
    BTN?: Aed;
    XAF?: Aed;
    SLL?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    UAH?: Aed;
    ILS?: Aed;
    SOS?: Aed;
    NIO?: Aed;
    LKR?: Aed;
    USD?: Aed;
    MDL?: Aed;
    CAD?: Aed;
    AUD?: Aed;
    XOF?: Aed;
    TWD?: Aed;
    TND?: Aed;
    PGK?: Aed;
    HUF?: Aed;
    DKK?: Aed;
    XCD?: Aed;
    XPF?: Aed;
    HNL?: Aed;
    FOK?: Aed;
    GNF?: Aed;
    ANG?: Aed;
    KMF?: Aed;
    HRK?: Aed;
    CNY?: Aed;
    NZD?: Aed;
    LRD?: Aed;
    HKD?: Aed;
    IQD?: Aed;
    BWP?: Aed;
    LYD?: Aed;
    MNT?: Aed;
    CLP?: Aed;
    ZMW?: Aed;
    CHF?: Aed;
    KGS?: Aed;
    TMT?: Aed;
    MUR?: Aed;
    PHP?: Aed;
    BND?: Aed;
    SGD?: Aed;
    KZT?: Aed;
    SAR?: Aed;
    MXN?: Aed;
    THB?: Aed;
    IRR?: Aed;
    SBD?: Aed;
    IMP?: Aed;
    WST?: Aed;
    SCR?: Aed;
    RSD?: Aed;
    GYD?: Aed;
    MVR?: Aed;
    MZN?: Aed;
    AWG?: Aed;
    JEP?: Aed;
    SEK?: Aed;
    TRY?: Aed;
    GEL?: Aed;
    YER?: Aed;
    DOP?: Aed;
    UZS?: Aed;
    KID?: Aed;
    BBD?: Aed;
    BMD?: Aed;
    UGX?: Aed;
    KES?: Aed;
    BSD?: Aed;
    CRC?: Aed;
    NOK?: Aed;
    VND?: Aed;
    KWD?: Aed;
    MWK?: Aed;
    BDT?: Aed;
    LBP?: Aed;
    KPW?: Aed;
    CKD?: Aed;
    KYD?: Aed;
    RUB?: Aed;
    LAK?: Aed;
    TZS?: Aed;
    ARS?: Aed;
    SDG?: BAM;
    TVD?: Aed;
    NPR?: Aed;
    BAM?: BAM;
    PLN?: Aed;
    PYG?: Aed;
    NAD?: Aed;
    ZAR?: Aed;
    MRU?: Aed;
    SZL?: Aed;
    AED?: Aed;
    COP?: Aed;
    CVE?: Aed;
    GIP?: Aed;
    ALL?: Aed;
    PEN?: Aed;
    VES?: Aed;
    SRD?: Aed;
    JMD?: Aed;
    DZD?: Aed;
    TOP?: Aed;
    BRL?: Aed;
    BHD?: Aed;
    ZWL?: Aed;
    PKR?: Aed;
    AOA?: Aed;
    NGN?: Aed;
    MOP?: Aed;
    AFN?: Aed;
    SSP?: Aed;
    KRW?: Aed;
    QAR?: Aed;
    BZD?: Aed;
    TTD?: Aed;
    ISK?: Aed;
    RWF?: Aed;
    AZN?: Aed;
    GMD?: Aed;
    BIF?: Aed;
    ERN?: Aed;
    MAD?: Aed;
    GHS?: Aed;
    RON?: Aed;
    FJD?: Aed;
    IDR?: Aed;
    JOD?: Aed;
    UYU?: Aed;
    OMR?: Aed;
    BOB?: Aed;
    MGA?: Aed;
    VUV?: Aed;
    LSL?: Aed;
    GGP?: Aed;
    KHR?: Aed;
    ETB?: Aed;
    STN?: Aed;
    CDF?: Aed;
    GTQ?: Aed;
    AMD?: Aed;
    JPY?: Aed;
    DJF?: Aed;
    EGP?: Aed;
    MYR?: Aed;
    HTG?: Aed;
    CZK?: Aed;
    MMK?: Aed;
    PAB?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}