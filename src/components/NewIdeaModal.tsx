import { z } from "zod";
import React, { FC } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Form as ShadcnForm,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface NewIdea {
    id: string;
    title: string;
    description: string;
    date: string;
}

interface NewIdeaModalProps {
    isOpen: boolean;
    addIdea: (idea: NewIdea) => void;
    closeModal: () => void;
}

const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(40, "Keep Titles short and concise"),
    description: z.string().min(1, "Description is required").max(140, "Maximum of 140 characters"),
});

const NewIdeaModal: FC<NewIdeaModalProps> = ({ isOpen, addIdea, closeModal }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FieldValues> = (values) => {
        const newIdea: NewIdea = {
            id: uuidv4(),
            title: values.title, 
            description: values.description,
            date: new Date().toISOString(),
        };
        addIdea(newIdea);
        form.reset();
        closeModal();
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="p-4 sm:p-6 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
                <DialogHeader className="flex flex-col items-center mb-4">
                    <DialogTitle className="text-lg font-semibold">New Idea</DialogTitle>
                    <DialogDescription className="text-sm">
                        Please enter your idea details below.
                    </DialogDescription>
                </DialogHeader>
                <ShadcnForm {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" autoFocus placeholder="Enter Title Here" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is the name for your idea
                                    </FormDescription>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input className="w-full" placeholder="Enter Description" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your ideas here
                                    </FormDescription>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </ShadcnForm>
            </DialogContent>
        </Dialog>
    );
};

export default NewIdeaModal;
