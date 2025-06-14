"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import ProfileCard from "./ProfileCard";
import ProfileContent from "./ProfileContent";
import ProfileRightContent from "./ProfileRightContent";

export default function DashboardPage() {
  const [materia, setMateria] = useState("");
  const [semana, setSemana] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 justify-center items-stretch w-full max-w-[1400px] mx-auto px-2 md:px-6 py-4">
      <ProfileCard />
      <ProfileContent materia={materia} semana={semana} />
      <ProfileRightContent
        materia={materia}
        setMateria={setMateria}
        semana={semana}
        setSemana={setSemana}
      />
    </div>
  );
}