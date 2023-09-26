import React from "react";
import { ASSET_NAME_MAP, formatCurrency } from "../../../utils";

const Asset = ({ data: { symbolInput, basic, quote } }) => {
    const isNegative = quote?.change1DayPercent < 0;

    return (
        <a
            href={`https://markets.ft.com/data/indices/tearsheet/summary?s=${symbolInput}`}
            rel="noreferrer"
            target="_blank"
            className="asset-item"
        >
            <span className="asset-name">{ASSET_NAME_MAP[basic?.symbol]}</span>
            <span className={`asset-change-value change-${isNegative ? "down" : "up"}`}>
                {isNegative ? "" : "+"}
                {formatCurrency(quote?.change1DayPercent)}%
            </span>
        </a>
    );
};

export default Asset;
