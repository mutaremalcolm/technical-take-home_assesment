import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Button from "./Button";
import { Trash } from "lucide-react";

import React from 'react';

const IdeaCard = ({ index, title, description, deleteIdea }) => {
    return (
        <Card className="h-100 w-100 mt-10 ml-5 border border-gray-200 shadow-md rounded-md">
            <div className="flex flex-row justify-between">
                <CardContent className="p-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Created: 2024-07-03</p>
                    <p className="text-xs text-gray-500">Updated: 2024-07-03</p>
                </CardContent>
                <div className="">
                <CardContent className="p-4 space-x-3.5">
                    <Trash className="cursor-pointer text-red-500" onClick={() => deleteIdea(index)}/>
                </CardContent>
                </div>
            </div>
            <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600">{description}</CardDescription>
            </CardHeader>

            {/* <CardFooter className="flex justify-end p-4">
                <Button className="bg-blue-500 text-white py-2 px-4 rounded-md">Edit</Button>
            </CardFooter> */}
        </Card>
    );
}

export default IdeaCard;
