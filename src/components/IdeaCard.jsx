import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Trash } from "lucide-react";

const IdeaCard = ({ index, title, description, deleteIdea }) => {
    const [editableTitle, setEditableTitle] = useState(title);
    const [editableDescription, setEditableDescription] = useState(description);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [charCount, setCharCount] = useState(description.length); // Initialize with current description length
    const [isEdited, setIsEdited] = useState(false); // Track if the idea has been edited

    const handleTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleDescriptionClick = () => {
        setIsEditingDescription(true);
    };

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);
        setIsEdited(true); // Set to true when title changes
    };

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setEditableDescription(newDescription);
        setCharCount(newDescription.length); // Update character count
        setIsEdited(true); // Set to true when description changes
    };

    const handleTitleBlur = () => {
        // Save or update title
        setIsEditingTitle(false);
    };

    const handleDescriptionBlur = () => {
        // Save or update description
        setIsEditingDescription(false);
    };

    const handleDeleteClick = () => {
        deleteIdea(index);
    };

    return (
        <Card className="w-full max-w-[24rem] mt-10 ml-5 border border-gray-200 shadow-md rounded-md">
            <div className="flex flex-row justify-between">
                <CardContent className="p-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                        {isEdited ? 'Updated' : 'Created'}: {new Date().toLocaleDateString()} {/* Replace with actual dates */}
                    </p>
                </CardContent>
                <CardContent className="p-4 space-x-3.5">
                    <Trash className="cursor-pointer text-red-500" onClick={handleDeleteClick} />
                </CardContent>
            </div>
            <CardHeader className="p-4">
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={editableTitle}
                        onChange={handleTitleChange}
                        onBlur={handleTitleBlur}
                        className="text-xl font-semibold bg-transparent border-b border-transparent focus:outline-none focus:border-gray-300 w-full"
                    />
                ) : (
                    <CardTitle className="text-xl font-semibold cursor-pointer" onClick={handleTitleClick}>
                        {editableTitle}
                    </CardTitle>
                )}
                {isEditingDescription ? (
                    <textarea
                        value={editableDescription}
                        onChange={handleDescriptionChange}
                        onBlur={handleDescriptionBlur}
                        className="mt-2 text-sm text-gray-600 resize-none focus:outline-none focus:shadow-outline w-full"
                        maxLength={140}
                    />
                ) : (
                    <CardDescription className="mt-2 text-sm text-gray-600 cursor-pointer" onClick={handleDescriptionClick}>
                        {editableDescription}
                    </CardDescription>
                )}
                <div className="mt-2 flex justify-end">
                    <p className="text-xs text-gray-500">Character Count: {charCount}/140</p>
                </div>
            </CardHeader>
        </Card>
    );
};

export default IdeaCard;
