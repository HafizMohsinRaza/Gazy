export interface INavItem {
    routerlink?: string;
    icon?: string;
    label: string;
    expanded?:boolean;
    items?: INavItem[];
}