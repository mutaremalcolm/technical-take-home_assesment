"use client";

import * as z from "zod";
import toast from "react-hot-toast";

import { Idea } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

const generateUUID = () => {
  return uuidv4();
};

const EditIdeaSchema = z.object({
  uuid: z.string().default(() => generateUUID()),
  title: z
    .string()
    .min(5, {
      message: "⚠ Title must be at least 5 characters.",
    })
    .max(16, {
      message: "⚠ Title must not be longer than 16 characters.",
    })

    .default("Default Title"),
  description: z.string().optional(),
  content: z
    .string()
    .max(140, { message: "⚠ Content must be less than 140 characters." })
    .default("Default Content"),
  createdTime: z
    .date()
    .refine((value) => !isNaN(value.getTime()), {
      message: "Invalid Date",
    })
    .default(() => new Date()),
  updatedTime: z
    .date()
    .refine((value) => !isNaN(value.getTime()), {
      message: "Invalid Date",
    })
    .default(() => new Date()),
});

type EditIdeaSchemaType = z.infer<typeof EditIdeaSchema>;

interface IdeaCardProps {
  idea: Idea;
  onDelete: () => void;
  onSave: (updatedIdea: Idea) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onDelete, onSave }) => {
  const [charCount, setCharCount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const isSavedIdea = !idea.isNew;
  const [isEditMode, setIsEditMode] = useState(!isSavedIdea);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditIdeaSchemaType>({
    resolver: zodResolver(EditIdeaSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      title: idea.title || "",
      description: idea.description || "",
      content: idea.content || "",
    });

    if (localStorage.getItem("formSubmitted") === "true") {
      setFormSubmitted(true);
    }
  }, [idea, reset]);

  const onSubmit: SubmitHandler<Idea> = async (data) => {
    try {
      const updatedIdea: Idea = EditIdeaSchema.parse({
        ...idea,
        uuid: data.uuid,
        title: data.title,
        description: data.description,
        content: data.content,
        createdTime: new Date(data.createdTime),
        updatedTime: isEditMode ? new Date() : idea.updatedTime,
      });

      setFormSubmitted(true);
      localStorage.setItem("formSubmitted", "true");

      onSave(updatedIdea);

      const updatedIdeas = JSON.parse(
        localStorage.getItem("ideas") || "[]"
      ).map((storedIdea: Idea) =>
        storedIdea.uuid === updatedIdea.uuid ? updatedIdea : storedIdea
      );
      localStorage.setItem("ideas", JSON.stringify(updatedIdeas));

      const ideaExistsInLocalStorage = updatedIdeas.some(
        (storedIdea: Idea) => storedIdea.uuid === updatedIdea.uuid
      );

      if (!isSavedIdea) {
        setIsEditMode(true);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation error:", error.errors);
        toast.error("🌟 Validation error", {
          position: "bottom-center",
        });
      } else {
        console.error("Unexpected error:", error);
        toast.error("🌟 Unexpected error", {
          position: "bottom-center",
        });
      }
    }
  };

  const formatDateTime = (dateTime: Date) => {
    if (!(dateTime instanceof Date) || isNaN(dateTime.getTime())) {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(dateTime);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={` form relative  bg-opacity-50 rounded-lg shadow-md border border-clearScoreGrey p-4 mb-4 mt-4 
        lg:w-1/4 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105`}
        style={{ margin: "10px", padding: "20px" }}
      >
        <div className="flex justify-between items-center mt-0 mb-2">
          <p className="text-white text-md">
            {isEditMode && formSubmitted
              ? `Updated: ${formatDateTime(idea.updatedTime || new Date())}`
              : `Created: ${formatDateTime(idea.createdTime || new Date())}`}
          </p>
        </div>
        <div>
          <input
            {...register("title")}
            type="text"
            className="bg-transparent font-bold text-lg mb-2 focus:outline-none focus:shadow-outline 
              border-b-2 border-white w-full"
            placeholder="Enter Title..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            // TODO: Evaluate if its better to focus on title or on new ideaCard
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}

          <textarea
            {...register("content")}
            className="bg-transparent resize-none focus:outline-none focus:shadow-outline w-full"
            placeholder="Enter Description Here...."
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
            onChange={(e) => {
              const newContent = e.target.value;
              if (newContent.length <= 140) {
                setCharCount(
                  isEditMode && formSubmitted
                    ? newContent.length
                    : idea.content?.length || 0
                );
              } else {
                setIsInputDisabled(true);
              }
            }}
            disabled={isInputDisabled}
          />
          {errors.content && (
            <span className="text-red-500">{errors.content.message}</span>
          )}
          <div className="flex justify-between items-center lg:mr-2">
            <p className="bg-transparent text-white text-sm ml-10 mt-10 ">
              Character Count: {charCount}/140
            </p>
          </div>
          <div>
            <div>
              <button
                onClick={onDelete}
                className=" hover: transition-shadow absolute bottom-0 left-0 p-2 cursor-pointer 
                  text-bg-800 mr-2 text-4xl"
              >
                <MdDeleteForever />
              </button>
              <div>
                <button
                  type="submit"
                  className={`absolute bottom-0 right-0 mr-4 p-2 hover:bg-gray-400 bg-white text-black border 
                  ${
                    isTextareaFocused ? "hover:bg-gray-400 bg-white text-black" : "hidden"
                  }
                  ${ isEditMode && formSubmitted
                       ? "hover:bg-green-100"
                       : "hover:bg-white"
                   }text-black px-3 py-1 mb-2 rounded focus:outline-none focus:shadow-outline`}
                >
                  {isEditMode && formSubmitted ? "Save" : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default IdeaCard;
