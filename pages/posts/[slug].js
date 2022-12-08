import { GraphQLClient, gql } from 'graphql-request';
import styles from '../../styles/Slug.module.css';
import moment from 'moment';
import Image from 'next/image';

const graphcms = new GraphQLClient(process.env.API_URL);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <Image
        className={styles.cover}
        src={post.coverPhoto.url}
        alt={post.title}
        width={100}
        height={100}
      />
      <div className={styles.text}>
        <h2 className={styles.postHeading}>{post.title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <Image
              className={styles.authorImg}
              src={post.author.avatar.url}
              alt={post.author.name}
              width={48}
              height={48}
            />
            <h3>By {post.author.name} </h3>
          </div>
          <h6 className={styles.date}>
            {moment(post.datePublished).format('MMMM DD, YYYY')}
          </h6>
        </div>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
}
