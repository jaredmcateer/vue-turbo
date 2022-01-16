
declare interface ButtonProps {
  label: string;
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

declare interface HeaderProps {
  user: Record<string, unknown> | null
}

declare interface PageProps {
  user: Record<string, unknown> | null

}
