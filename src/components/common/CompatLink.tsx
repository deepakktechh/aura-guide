'use client';

import React from 'react';
import NextLink from 'next/link';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, href, children, ...props }) => {
  const target = href || to || '/';
  return (
    <NextLink href={target} {...props}>
      {children}
    </NextLink>
  );
};

export interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  to?: string;
  href?: string;
  end?: boolean;
  activeClassName?: string;
  className?: string | ((props: { isActive: boolean }) => string);
  children?: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  href,
  end,
  className,
  children,
  ...props
}) => {
  const target = href || to || '/';
  const location = useLocation();
  const isActive = end
    ? location.pathname === target
    : location.pathname.startsWith(target);

  const resolvedClassName = typeof className === 'function'
    ? className({ isActive })
    : className;

  return (
    <NextLink href={target} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  );
};

export const Outlet: React.FC = () => null;

export const useNavigate = () => {
  if (typeof window === 'undefined') {
    return () => {};
  }
  return (path: string) => {
    window.location.href = path;
  };
};

export const useLocation = () => {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' };
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  };
};
