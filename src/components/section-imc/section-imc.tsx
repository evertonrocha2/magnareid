"use client";
import { useEffect, useState } from "react";

import ImcCalculator from "../imc-calculator/imc-calculator";

export default function SectionImc() {

  const [session, setSession] = useState();
  const [showResult, setShowResult] = useState(false);


  const fetchSession = async () => {
    const res = await fetch("/api/auth/session");
    setSession(await res.json());
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <div id="imc-calculator" className="h-[80vh] flex flex-col items-center gap-8 relative justify-center bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="bg_pattern_dots h-[100%] w-[100%] z-[1] absolute"></div>

      <ImcCalculator/>

    </div>
  );
}
