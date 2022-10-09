import Image from 'next/image';
import ActiveLink from './ActiveLink';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <ActiveLink href={'/'} activeClassName='active'>
              <a>
                <Image
                  src='/monzo.svg'
                  alt='logo'
                  width={60}
                  height={60}
                  className='.logo'
                  aria-label='Ninja logo'
                />
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/' activeClassName='active'>
              <a>Home</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/about' activeClassName='active'>
              <a>About</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href='/ninjas' activeClassName='active'>
              <a>Ninja Listing</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
