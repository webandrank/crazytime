import Link from 'next/link';

function Nav() {
  return (
    <nav className='navbar'>
      <h1 className='heading'>statistichecrazytime</h1>
      <Link className='navLink' href='/'>
        Home
      </Link>
    </nav>
  );
}

export default Nav;
