import { Trash } from "lucide-react";

import React, { useState } from 'react';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


const IdeaCard = ({ id, title, description, deleteIdea }) => {
    // TODo: refactor useState to a useReducer instead
    const [editableTitle, setEditableTitle] = useState(title);
    const [editableDescription, setEditableDescription] = useState(description);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [charCount, setCharCount] = useState(description.length);
    const [isEdited, setIsEdited] = useState(false);

    const handleTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleDescriptionClick = () => {
        setIsEditingDescription(true);
    };

    const handleTitleChange = (event) => {
        setEditableTitle(event.target.value);

        setIsEdited(true);
    };

    const handleDescriptionChange = (event) => {
        const newDescription = event.target.value;
        setEditableDescription(newDescription);
        setCharCount(newDescription.length);
        setIsEdited(true);
    };

    const handleTitleBlur = () => {
        setIsEditingTitle(false);
    };

    const handleDescriptionBlur = () => {
        setIsEditingDescription(false);
    };

    const handleDeleteClick = () => {
        deleteIdea(id);
    };

    return (
        <Card className="idea-card w-full max-w-[24rem] mt-5 sm:mt-10 mx-auto sm:ml-5 border border-gray-200 shadow-md rounded-md">
            <div className="flex flex-row justify-between p-4">
                <p className="text-xs text-gray-500">
                    {isEdited ? 'Updated' : 'Created'}: {new Date().toLocaleDateString()}
                </p>
                <Trash className="cursor-pointer text-red-500" onClick={handleDeleteClick} />
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
                    <CardTitle className="text-xl font-semibold cursor-pointer mb-5" onClick={handleTitleClick}>
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
                    <CardDescription className="text-sm text-gray-600 cursor-pointer mb-5 border-t pt-2" onClick={handleDescriptionClick}>
                        {editableDescription}
                    </CardDescription>
                )}
                <div className="flex justify-end">
                    <p className="text-xs text-gray-500">Character Count: {charCount}/140</p>
                </div>
            </CardHeader>
        </Card>
    );
};

export default IdeaCard;
