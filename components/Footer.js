import Link from 'next/link';

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <Link className='footerLink' href='https://nextjs.org/'>
          Next.JS
        </Link>{' '}
        and{' '}
        <Link className='footerLink' href='https://hygraph.com/'>
          GraphCMS
        </Link>{' '}
        powered Blog made with ❤️ by{'    '}
        <Link className='footerLink' href='#'>
          Alex.
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

//  <Link href='/'>statistichecrazytime</Link>;
