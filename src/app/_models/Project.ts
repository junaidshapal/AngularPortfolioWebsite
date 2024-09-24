import { Tag } from "./Tag";

//Interface for Project with properties
export interface Project{
    id: number;
    name:string;
    summary:string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}