import React from "react";
import { HeaderSec } from "../components/SectionOne/HeaderSec";
import { HeaderNav } from "../components/SectionOne/HeaderNav";
import { HeaderSidebar } from "../components/SectionOne/HeaderSidebar";
import { ContentSecOne } from "../components/SectionOne/ContentSecOne";
 
export const SectionOne = () => {
    return(
        <div className="bg-primaryOne">
        <HeaderSec/>
        <HeaderNav/>
        <div className="flex">
            <div className="w-1/5"><HeaderSidebar/></div>
            <div className="w-4/5"><ContentSecOne/></div>
            
        </div>
        </div>
    )
}