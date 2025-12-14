import z from 'zod';

export const productChangeRequestSchema = z.object({
  action: z.string().refine(val => ['approved', 'rejected'].includes(val), {
    message: 'Action is required',
  }),
  reason: z.string().optional(),
});

export type ProductChangeRequestInput = z.infer<typeof productChangeRequestSchema>;
