import { router, publicProcedure, protectedProcedure } from "../trpc";

export const userRouter = router({
  create: protectedProcedure
  .mutation(async ({ ctx }) => {
	const user = await ctx.prisma.user.create({
		data: {
			id: "42abcd",
			email: 'ledude@biglebowski.com',
			name: "The Dude",
		}
	});
	return user;
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});