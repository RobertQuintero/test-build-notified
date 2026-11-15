
import { CorporateOverview } from "@/components/home/corporateoverview";
import { Filings } from "@/components/home/filings";
import { HeroBillboard } from "@/components/home/herobillboard";
import { LatestEvents } from "@/components/home/latestevents";
import { LatestNews } from "@/components/home/latestnews";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
    <HeroBillboard />
    <CorporateOverview/>
    <LatestNews/>
    <LatestEvents/>
    <Filings/>
    </React.Fragment>
  );
}
