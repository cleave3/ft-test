/** You can submit this test using either Handlebars or JSX as a templating engine. This is the file to work in if you would like to use JSX */

import React from "react";
import Asset from "./Asset";

export default function Home({ error, data }) {
    return (
        <main className="main-container">
            <h1 className="site-title">Financial Times</h1>
            <section className="stats-section">
                <div className="asset-container o-grid-container">
                    {error ? (
                        <marquee>
                            <span className="error">{error}</span>
                        </marquee>
                    ) : (
                        <>
                            {data?.map((data, i) => (
                                <Asset key={i} data={data} />
                            ))}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
