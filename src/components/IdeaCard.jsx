import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Button from "./Button";

import React from 'react';

const IdeaCard = () => {
    return (
        <Card className="h-90 min-h-fit w-64 mt-10 ml-5 border border-gray-200 shadow-md rounded-md">
            <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold">Idea Title</CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600">Idea Description</CardDescription>
            </CardHeader>
            <CardContent className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">Created: 2024-07-03</p>
                <p className="text-xs text-gray-500">Updated: 2024-07-03</p>
            </CardContent>
            <CardFooter className="flex justify-end p-4 border-t border-gray-200">
                <Button className="bg-blue-500 text-white py-2 px-4 rounded-md">View Details</Button>
            </CardFooter>
        </Card>
    );
}

export default IdeaCard;
