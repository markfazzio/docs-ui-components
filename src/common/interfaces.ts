export interface ThemeProps {
  theme?: 'dark' | 'light';
}

export interface TableColumnProps {
  label: string;
}

export interface TableRowProps {
  [key: string]: string;
}
