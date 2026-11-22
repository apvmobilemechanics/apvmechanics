import { author } from "./author";
import { blockContent } from "./blockContent";
import { category } from "./category";
import { post } from "./post";
import { redirect } from "./redirect";
import { seo } from "./seo";
import { tag } from "./tag";

export const schemaTypes = [post, author, category, tag, redirect, seo, blockContent];
