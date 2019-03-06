const Mutations = {
    async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in
    
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;    // or you can return the item instead of putting it in a var
    },

    updateItem(parent, args, ctx, info) {
        // first take a copy of the updates
        const updates = {...args};
        // remove id from the updates
        delete updates.id;
        // run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id,
            },
        }, 
        info
        )
    }

};

module.exports = Mutations;
