import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

export default function ActiveLink({
  children,
  className,
  activeClassName,
  href,
  ...restProps
}) {
  const router = useRouter();
  const child = Children.only(children);

  const classNameForLink =
    router.pathname === href
      ? [activeClassName, className].join(' ')
      : className;

  return (
    <Link href={href} {...restProps}>
      {React.cloneElement(child, {
        className: classNameForLink,
      })}
    </Link>
  );
}
