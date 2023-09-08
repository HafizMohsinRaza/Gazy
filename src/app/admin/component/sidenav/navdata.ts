import { INavItem } from './helper';

export const navItems: INavItem[] = [
  {
    routerlink: 'home',
    icon: 'fa-solid fa-sliders',
    label: 'Dashboard',
  },
  {
    routerlink: 'home-banner',
    icon: 'fa-solid fa-sliders',
    label: 'Home Slider Banner',
  },
  {
    routerlink: 'blogs',
    icon: 'fa-solid fa-blog',
    label: 'Blogs',
  },
  {
    routerlink: 'home',
    icon: 'fa-solid fa-address-card',
    label: 'About',
    items: [
      {
        routerlink: 'team',
        icon: 'fa-solid fa-list-check',
        label: 'Team',
      },
      {
        routerlink: 'about-us',
        icon: 'fa-solid fa-list-check',
        label: 'About',
      },
    ],
  },
  {
    routerlink: 'homepage',
    icon: 'fa-solid fa-list-check',
    label: 'Homepage Content',
  },
  {
    routerlink: 'contact',
    icon: 'fa fa-address-book',
    label: 'Contact Info',
  },
  {    
    routerlink: 'job',
    icon: 'fa fa-address-book',
    label: 'Job',
  },
  {
    routerlink: 'client-logo',
    icon: 'fa-solid fa-user-tie',
    label: 'Customer Logo',
  },
  {
    routerlink: 'information',
    icon: 'fa-brands fa-searchengin',
    label: 'SEO',
  },
];
