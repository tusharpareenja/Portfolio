import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/travel.jpeg"
          title="Trekify"
          description="A travel community that goes beyond the ordinary! This platform not only connects users but also introduces them to hidden gems—destinations that are off the beaten path and less visited. It offers personalized travel guides to enrich their journeys and a unique AI-powered feature to match users with the perfect travel buddy based on their preferences, interests, and travel styles. Whether you're seeking adventure, relaxation, or cultural exploration, this innovative community ensures a seamless and unforgettable travel experience."
        />
        <ProjectCard
          src="/game.jpeg"
          title="Dizilo"
          description="A one-stop platform designed for game developers! This website allows users to browse and purchase game assets effortlessly, offering a comprehensive collection that caters to every need—from characters and environments to soundtracks and special effects. Beyond being an asset marketplace, it fosters a thriving community for game developers to showcase their projects, exchange ideas, and collaborate. Whether you're building your first game or enhancing an existing project, this platform is your ultimate resource for creativity and connection in the game development world."
        />

        <ProjectCard
          src="/promptopia.jpeg"
          title="Promptopia"
          description="Promptopia is a community-driven platform where users can upload and share useful prompts, allowing others to discover and utilize them. The platform is built using Next.js for the frontend and MongoDB for data storage."
        />
        
      </div>
    </div>
  );
};

export default Projects;
