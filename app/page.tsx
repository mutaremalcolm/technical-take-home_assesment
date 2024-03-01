"use client";

import { Idea } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import toast from "react-hot-toast";
import IdeaCard from "@/components/IdeaCard";
import Navigation from "@/components/Navbar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const savedIdeas = localStorage.getItem("ideas");
    if (savedIdeas) {
      setIdeas(
        JSON.parse(savedIdeas).map((idea: Idea) => ({
          ...idea,
          createdTime: new Date(idea.createdTime),
          updatedTime: new Date(idea.updatedTime),
        }))
      );
    } else {
      setIdeas([]);
      localStorage.setItem("ideas", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (ideas.length > 0) {
      localStorage.setItem("ideas", JSON.stringify(ideas));
    }
  }, [ideas]);

  const handleAddNewCard = () => {
    const currentDate = new Date();
    const newCard: Idea = {
      uuid: uuidv4(),
      title: "",
      description: "",
      createdTime: currentDate,
      updatedTime: currentDate,
      content: "",
      isNew: true,
    };

    toast.success("💡 Idea Created", {
      position: "top-center",
      style: {
        background: "black",
        color: "#fff",
      },
    });

    setIdeas([...ideas, newCard]);
  };

  const handleSave = (updatedIdea: Idea, index: number) => {
    const newIdeas: Idea[] = [...ideas];
    newIdeas[index] = { ...updatedIdea, isNew: false };
    setIdeas(newIdeas);
    localStorage.setItem("ideas", JSON.stringify(newIdeas));
    if (ideas.length > 0) {
      toast.success("💡 Save Successful", {
        position: "top-center",
        style: {
          background: "black",
          color: "#fff",
        },
      });
    }
  };

  const handleDelete = (index: number) => {
    const newIdeas = [...ideas];
    newIdeas.splice(index, 1);
    setIdeas(newIdeas);
    localStorage.removeItem("ideas");
    if (ideas.length > 0) {
      toast.success("🗑️ Delete Successful", {
        position: "top-center",
        style: {
          background: "black",
          color: "#fff",
        },
      });
    }
  };

  const [sortType, setSortType] = useState<"" | "date" | "alph" | "alph_rev">(
    ""
  );

  const handleSort = () => {
    let sortedIdeas = [...ideas];

    switch (sortType) {
      case "date":
        sortedIdeas = sortedIdeas.sort(
          (a, b) =>
            new Date(a.createdTime).getTime() -
            new Date(b.createdTime).getTime()
        );
        break;
      case "alph":
        sortedIdeas = sortedIdeas.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "alph_rev":
        sortedIdeas = sortedIdeas.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      default:
        break;
    }

    setIdeas(sortedIdeas);

    if (ideas.length > 0) {
      toast.success(`🔄 Sort Successful`, {
        position: "top-center",
        style: {
          background: "black",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <Navigation onAddNewCard={handleAddNewCard} />
      <div className="flex flexDirection: row bg-opacity-50 mt-2 ml-10">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 font-bold
          hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105 focus:outline-none focus:shadow-outline justify-center  border"
          >
            <FontAwesomeIcon icon={faBars} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-opacity-50 text-white">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSortType("alph");
                handleSort();
              }}
              className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4 ml-3 font-bold
              hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
              hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border"
            >
              Sort A-Z
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSortType("alph_rev");
                handleSort();
              }}
              className="bg-opacity-50 text-white p-2 mb-2 rounded text-sm mt-4  ml-3 font-bold
              hover:bg-gray-400 shadow-lg transition-transform duration-300 transform hover:-translate-y-1 
              hover:scale-105bg-gray-400 focus:outline-none focus:shadow-outline justify-center border"
            >
              Sort Z-A
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleAddNewCard}
          autoFocus
          className="w-40 h-40 rounded-full border-5 border-solid border p-4 bg-opacity-50 text-gray flex items-center transition-transform duration-300 transform hover:-translate-y-1 
          hover:scale-105 bg-gray-400 justify-center hover:bg-gray700 focus:outline-none focus:ring focus:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 margin "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
        <main className="flex flex-wrap justify-around">
          {ideas.map((idea: Idea, index: number) => (
            <IdeaCard
              key={idea.uuid}
              idea={idea}
              onDelete={() => handleDelete(index)}
              onSave={(updatedIdea: Idea) => handleSave(updatedIdea, index)}
            />
          ))}
        </main>
      <input
        type="text"
        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
      />
    </>
  );
}
