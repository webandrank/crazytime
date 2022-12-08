import styles from '../styles/BlogCard.module.css';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

function BlogPost({ title, author, coverPhoto, datePublished, slug }) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.coverPhoto}
            src={coverPhoto.url}
            alt=''
            fill
            sizes='25vw'
          />
        </div>
        <div className={styles.text}>
          <h2 className={styles.cardHeading}>{title}</h2>
          <div className={styles.details}>
            <div className={styles.author}>
              <Image
                className={styles.authorImg}
                src={author.avatar.url}
                alt={author.name}
                width={48}
                height={48}
              />
              <h3 className={styles.authorName}>{author.name}</h3>
            </div>
            <div className={styles.date}>
              {moment(datePublished).format('MMM DD, YYYY')}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost;
