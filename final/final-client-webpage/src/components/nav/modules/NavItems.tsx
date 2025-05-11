import { navItems } from "./navData";

export const NavLinks = ({ className }: { className: string }) => (
  <>
    {navItems.map((item) => (
      <a key={item.name} href={item.href} className={className}>
        {item.name}
      </a>
    ))}
  </>
);
