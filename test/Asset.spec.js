/**
 * @jest-environment jsdom
 */

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Asset from "../views/jsx/Components/Asset";
import { ASSET_NAME_MAP, formatCurrency } from "../utils";

const DATA = {
    symbolInput: "FTSE:FSI",
    basic: {
        symbol: "FTSE:FSI",
        name: "FTSE 100 Index",
        exchange: "FTSE International",
        exhangeCode: "FSI",
        bridgeExchangeCode: "GBFT",
        currency: "GBP",
    },
    quote: {
        lastPrice: 7637.59,
        openPrice: 7623.99,
        high: 7642.07,
        low: 7593.54,
        previousClosePrice: 7623.99,
        change1Day: 13.600000000000364,
        change1DayPercent: 0.17838428434455403,
        change1Week: -22.609999999999673,
        change1WeekPercent: -0.29516200621393268,
        timeStamp: "2023-09-26T09:02:18",
        volume: 71736290.0,
    },
};

const DATA2 = {
    symbolInput: "GBPUSD",
    basic: {
        symbol: "GBPUSD",
        name: "UK Pound Sterling/US Dollar FX Spot Rate",
        exchange: "SOURCE IS A THOMSON REUTERS CONTRIBUTOR",
        exhangeCode: "RCT",
        bridgeExchangeCode: "CUX",
    },
    quote: {
        lastPrice: 1.2186000000000001,
        openPrice: 1.2207000000000001,
        high: 1.2215,
        low: 1.2168,
        closePrice: 1.2211,
        previousClosePrice: 1.2211,
        change1Day: -0.0024999999999999467,
        change1DayPercent: -0.20473343706493707,
        change1Week: -0.020599999999999952,
        change1WeekPercent: -1.6623628147191696,
        ask: 1.219,
        bid: 1.2186000000000001,
        timeStamp: "2023-09-26T08:39:00",
        volume: 0.0,
    },
};

afterEach(cleanup);

test("it renders Asset component to render correctly", () => {
    const { getByText, container } = render(<Asset data={DATA} />);

    expect(getByText(ASSET_NAME_MAP[DATA.symbolInput])).toBeInTheDocument();
    expect(getByText(`+${formatCurrency(DATA.quote.change1DayPercent)}%`)).toBeInTheDocument();
    expect(container?.firstChild?.lastChild?.classList.contains("change-up")).toBeTruthy();
});

test("The span containing the change1DayPercent value should contain the change-down className when change1DayPercent value is negative", () => {
    const { container } = render(<Asset data={DATA2} />);

    expect(container?.firstChild?.lastChild?.classList.contains("change-up")).toBeFalsy();
    expect(container?.firstChild?.lastChild?.classList.contains("change-down")).toBeTruthy();
});
