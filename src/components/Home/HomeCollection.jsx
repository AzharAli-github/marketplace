import React from "react";
import { CollectionNav } from "./CollectionNav";
import { CollectionCards } from "./CollectionCards";
import { LaunchpadDrops } from "./LaunchpadDrops";

export const HomeCollection = () => {
    return (
        <div>
            <CollectionNav/>
            <CollectionCards/>
            <LaunchpadDrops/>
        </div>
    )
}