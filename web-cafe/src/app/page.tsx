"use client";
import Image from "next/image";
import Cafe from "./cafe/page";
import { MainPage } from "./main_page";
// import { Cafe } from "./cafe/page";
import { Nav } from "./nav";
export default function Home() {
  return (<>
    <div className="pl-12">
      {/* <Cafe name = {"Party"}/> */}
      <MainPage></MainPage>
    </div>
    
  </>
  );
}
