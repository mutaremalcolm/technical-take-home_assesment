"use client"

import * as React from "react";
import IdeaCard from "@/components/IdeaCard";
import Navigation from "@/components/Navbar";

export default function Home() {
  // Example array of ideas in state
  const [ideas, setIdeas] = React.useState([
    { title: "Idea 1", description: "Description 1", createdTime: "time1", updatedTime: "time1" },
    { title: "Idea 2", description: "Description 2", createdTime: "time2", updatedTime: "time2" },
    { title: "Idea 3", description: "Description 3", createdTime: "time3", updatedTime: "time3" },
    // Add more ideas as needed
  ]);

  const handleDelete = (index: number) => {
    // Implement logic to delete the idea at the specified index
    const newIdeas = [...ideas];
    newIdeas.splice(index, 1);
    setIdeas(newIdeas);
  };

  return (
    <>
      <Navigation />
      {ideas.map((idea, index) => (
        <IdeaCard key={index} idea={idea} onDelete={() => handleDelete(index)} />
      ))}
    </>
  );
}
