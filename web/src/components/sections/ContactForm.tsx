"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Au moins 2 caractères"),
  email: z.email("Email invalide"),
  topic: z.enum(["collection", "sur-mesure", "entretien", "autre"]),
  message: z.string().min(20, "Au moins 20 caractères"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { topic: "collection" },
  });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      console.log("[contact form — placeholder, Phase 4 brevo]", data);
      toast.success("Message bien reçu — je vous réponds sous 24h.");
      reset();
    } catch {
      toast.error("Une erreur est survenue. Réessayez ou écrivez-moi par mail.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="name">Prénom</Label>
        <Input id="name" {...register("name")} />
        {errors.name ? (
          <p className="text-raspberry text-xs">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email ? (
          <p className="text-raspberry text-xs">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic">Sujet</Label>
        <select
          id="topic"
          {...register("topic")}
          className="border-input focus-visible:ring-ring h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:ring-1 focus-visible:outline-none"
        >
          <option value="collection">À propos de la collection</option>
          <option value="sur-mesure">Création sur-mesure</option>
          <option value="entretien">Entretien d&apos;un bijou</option>
          <option value="autre">Autre</option>
        </select>
        {errors.topic ? (
          <p className="text-raspberry text-xs">{errors.topic.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={6} {...register("message")} />
        {errors.message ? (
          <p className="text-raspberry text-xs">{errors.message.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full sm:w-auto"
        disabled={submitting}
      >
        {submitting ? "Envoi…" : "Envoyer mon message"}
      </Button>
    </form>
  );
}
