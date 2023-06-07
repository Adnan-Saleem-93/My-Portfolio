import { IconType } from "react-icons/lib";

export interface IProject{
    id:number;
    name:string;
    url:string;
    homepage:string;
}

export interface ITechnology{
    id:string;
    name: string;
}
  
export interface IConnectItem{
    id:string;
    name:string;
    icon:IconType;
    href?:string;
    background:string;
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