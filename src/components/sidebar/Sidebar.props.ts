import { BlogsType } from "../../interface/blogs.interface";
import { CategorysType } from "../../interface/category.interface";

export interface SidebarProps {
  latestBlogs: BlogsType[];
  categories: CategorysType[]
}