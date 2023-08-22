export interface MenuItem {
  icon?: any;
  slug: string;
  title: string;
  isParent?: boolean;
  path?: string;
  children?: MenuItem[];
}
