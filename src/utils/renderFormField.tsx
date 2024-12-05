import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textArea";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string({ required_error: "First name is required" })
    .min(2, { message: "Must be 2 characters or longer" }),
  lastname: z.string({ required_error: "Last name is required" })
    .min(2, { message: "Must be 2 characters or longer" }),
  email: z.string({ required_error: "E-mail is required" })
    .email({ message: "Invalid e-mail address" }),
  message: z.string({ required_error: "Please give me the reason for this contact" })
    .min(10, { message: "Must be 10 characters or longer" })
    .max(300, { message: "Cannot be longer than 300 characters" })
});

export type FormData = z.infer<typeof formSchema>;

export const renderFormField = <TFieldValues extends FieldValues>(
  control: Control<TFieldValues>,
  name: Path<TFieldValues>,
  label: string,
  placeholder: string,
  type: 'input' | 'textarea' = 'input'
) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          {type === 'textarea' ? (
            <Textarea
              placeholder={placeholder}
              {...field}
              value={field.value as string}
            />
          ) : (
            <Input
              type={name === 'email' ? 'email' : 'text'}
              placeholder={placeholder}
              {...field}
              value={field.value as string}
            />
          )}
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
