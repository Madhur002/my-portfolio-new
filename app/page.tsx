"use client";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "@/components/HomePage/HomePage";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Sidebar from "@/components/Sidebar/Sidebar";
import SkillSection from "@/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-y-auto">
      <Navbar/>
      <Sidebar/>
      <HomePage/>
      <ProfileSection/>
      <ProjectsSection/>
      <SkillSection/>
    </main>
  );
}
