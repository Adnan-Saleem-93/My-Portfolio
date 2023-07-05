import { IconType } from "react-icons/lib";

export interface IProject{
    id:number;
    name:string;
    html_url:string;
    homepage:string;
}

export interface ITechnology{
    id:string;
    name: string;
}
  
export interface IContactItem{
    id:string;
    name:string;
    icon:IconType;
    href?:string;
    background:string;
}

export interface ILinkItem{
    name:string;
    href:string;
}

export interface INavItem{
    id:string;
    name:string;
}

export interface ISkill{
    id: string;
    name:string;
    level:number;
}