"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Button from "./Button"
import {
    Form as ShadcnForm,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from 'react'


const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(40, "Keep Titles short and concise"),
    description: z.string().min(1, "Description is required").max(140, "Maximum of 140 characters")
});

const NewIdeaModal = ({ isOpen, addIdea, closeModal }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values) => {
        addIdea(values); // Pass form values to addIdea
        form.reset();
        closeModal(); // Close the modal
    };

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <div className="flex flex-col items-center mb-2">
                        <DialogTitle>New Idea</DialogTitle>
                    </div>
                    <div className="flex flex-col items-center">
                        <DialogDescription>
                            Please enter your idea details below.
                        </DialogDescription>
                    </div>
                </DialogHeader>
                <ShadcnForm {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Title Here" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is the name for your idea
                                    </FormDescription>
                                    <FormMessage />
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
                                        <Input placeholder=" Enter Description" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your ideas here
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col items-center">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </ShadcnForm>
            </DialogContent>
        </Dialog>
    )
}

export default NewIdeaModal;
