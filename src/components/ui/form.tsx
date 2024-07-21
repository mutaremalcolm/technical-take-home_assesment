import * as React from "react";
import { Slot as RadixSlot } from "@radix-ui/react-slot";
import {
    Controller,
    FormProvider,
    useFormContext,
    FieldValues,
    ControllerRenderProps,
    ControllerFieldState,
    UseFormStateReturn,
    Control,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

const FormFieldContext = React.createContext<{ name: string }>({ name: "" });

type SlotProps = React.ComponentPropsWithoutRef<typeof RadixSlot> & {
    className?: string;
};

const Slot: React.FC<SlotProps> = ({ className, ...props }) => (
    <RadixSlot className={cn(className)} {...props} />
);

interface FormFieldProps {
    name: string;
    control: Control<FieldValues>;
    render: ({
        field,
        fieldState,
        formState,
    }: {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<FieldValues>;
    }) => React.ReactElement;
}

const FormField: React.FC<FormFieldProps> = ({ name, control, render }) => (
    <FormFieldContext.Provider value={{ name }}>
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState, formState }) =>
                render({ field, fieldState, formState })
            }
        />
    </FormFieldContext.Provider>
);

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const { getFieldState, formState } = useFormContext<FieldValues>();

    if (!fieldContext || !fieldContext.name) {
        throw new Error("useFormField must be used within <FormField> with a defined name");
    }

    const fieldState = getFieldState(fieldContext.name, formState);
    const id = React.useId();

    return {
        id,
        name: fieldContext.name,
        ...fieldState,
    };
};

const FormItemContext = React.createContext<{ id: string }>({ id: "" });

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const id = React.useId();

        return (
            <FormItemContext.Provider value={{ id }}>
                <div ref={ref} className={cn("space-y-2", className)} {...props} />
            </FormItemContext.Provider>
        );
    }
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<HTMLLabelElement, React.HTMLProps<HTMLLabelElement>>(
    ({ className, ...props }, ref) => {
        const { error, name } = useFormField();

        return (
            <Label
                ref={ref}
                className={cn(error ? "text-destructive" : "", className)}
                htmlFor={name}
                {...props}
            />
        );
    }
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { error, name } = useFormField();
        const id = `${name}-form-item`;

        return (
            <Slot
                ref={ref}
                id={id}
                aria-invalid={!!error}
                className={cn(className)}
                {...props}
            />
        );
    }
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        const { name } = useFormField();
        const id = `${name}-form-item-description`;

        return (
            <p
                ref={ref}
                id={id}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}
            />
        );
    }
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    ({ className, children, ...props }, ref) => {
        const { error, name } = useFormField();
        const id = `${name}-form-item-message`;
        const body = error ? String(error.message) : children;

        if (!body) return null;

        return (
            <p
                ref={ref}
                id={id}
                className={cn("text-sm font-medium text-destructive", className)}
                {...props}
            >
                {body}
            </p>
        );
    }
);
FormMessage.displayName = "FormMessage";

export {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
};
