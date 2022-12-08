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
        <Link
          className='footerLink'
          href='https://www.fiverr.com/rohit_saini_7/get-your-website-built-reactjs'
        >
          Rohit.
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

//  <Link href='/'>statistichecrazytime</Link>;
