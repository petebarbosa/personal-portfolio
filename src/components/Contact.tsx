"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { renderFormField, FormData, formSchema } from "@/utils/renderFormField";

const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormData) => {
    // TODO: Add submit handling
    console.log(values);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact me :)</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {renderFormField(form.control, 'firstname', 'First Name', 'Your first name')}
              {renderFormField(form.control, 'lastname', 'Last Name', 'Your last name')}
            </div>

            {renderFormField(form.control, 'email', 'Email', 'Your email address')}
            {renderFormField(form.control, 'message', 'Message', 'Tell me about your project or inquiry', 'textarea')}

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
