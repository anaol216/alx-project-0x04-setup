import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CounterApp from "./counter-app";

export default function Home() {
  return (
    <div>
      <CounterApp/>
    </div>
  );
}
