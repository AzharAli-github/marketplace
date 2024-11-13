import React from "react";
import { LaunchpadNav } from "./LaunchpadNav";
import { LaunchpadCards } from "./LaunchpadCards";
import { ProductProvider } from "../Context/Context";

export const LaunchpadDrops = () => {
    return (
        <ProductProvider>
            <div>
                <h1>Launchpad Drops</h1>
                <LaunchpadNav />
                <LaunchpadCards />
            </div>
        </ProductProvider>
    )
}