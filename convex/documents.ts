import { v } from "convex/values"
import {mutation, query} from "./_generated/server"

export const create = mutation({
    args: {
        title: v.string(),
        parentDocument: v.optional(v.id("documents"))
    },
    handler: async (ctx, args) => {
       const identity = await ctx.auth.getUserIdentity();
       
       if(!identity){
        throw new Error("Not authenticated!");
       }

       const userId = identity.subject;

       const document = ctx.db.insert("documents", {
           title: args.title,
           parentDocument: args.parentDocument,
           isPublished: false,
           isArchived: false,
           userId
       });

       return document;
    },
})

export const get = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
       
       if(!identity){
        throw new Error("Not authenticated!");
       }

       const documents = await ctx.db.query("documents").collect();

       return documents;
    }
})