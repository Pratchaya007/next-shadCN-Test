import AppAreachart from "@/components/test/appareachart";
import AppBarChart from "@/components/test/appbarchart";
import AppPieChart from "@/components/test/appPieChart";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreachart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
    </div>
  );
}
