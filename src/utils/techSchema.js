import { z } from "zod";

export const techSchema = z.object({
  title: z.string().min(1, "Escolha o titulo da tecnologia"),

  status: z.string().min(1, "Escolha o nivel em que está"),
});
