/**
 * @jest-environment jsdom
 */

import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom';
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

afterEach(cleanup);

test("it renders Asset component to render correctly", () => {
    const { getByText } = render(<Asset data={DATA} />);

    expect(getByText(ASSET_NAME_MAP[DATA.symbolInput])).toBeInTheDocument();
    expect(getByText(`+${formatCurrency(DATA.quote.change1DayPercent)}%`)).toBeInTheDocument();
});

