export const formatCurrency = value => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(Number(value));
};

export const ASSET_NAME_MAP = {
    "INX:IOM": "S&P 500",
    "SHI:SHH": "Shanghai",
    "FTSE:FSI": "FTSE 100",
    EURUSD: "Euro/Dollar",
    "IB.1:IEU": "Brent Crude Oil",
    GBPUSD: "Pound/Dollar",
};
