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
    DialogTrigger,
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
  description: z
    .string()
    .min(1, "Description is required")
    .max(140, "Maximum of 140 characters"),
});

const NewIdeaModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Dialog>
                <DialogTrigger>
                        <Button >New Idea</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Idea</DialogTitle>
                        <DialogDescription>
                            Please enter your idea details below.
                        </DialogDescription>
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
                                                <Input placeholder="Idea Title" {...field} />
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
                                                <Input placeholder="Description" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter your ideas here
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </ShadcnForm>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default NewIdeaModal;
