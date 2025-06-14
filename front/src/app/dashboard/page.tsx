"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import ProfileCard from "./ProfileCard";
import ProfileContent from "./ProfileContent";
import ProfileRightContent from "./ProfileRightContent";
import ChatWidget from "./ChatWidget";

export default function DashboardPage() {
  const [materia, setMateria] = useState("");
  const [semana, setSemana] = useState("");

  return (
    <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-6 overflow-x-auto">
      <ProfileCard />
      <ProfileContent materia={materia} semana={semana} />
      <ProfileRightContent
        materia={materia}
        setMateria={setMateria}
        semana={semana}
        setSemana={setSemana}
      />
      <ChatWidget />
    </div>
  );
}