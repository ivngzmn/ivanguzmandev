import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Ivan Guzman – Software Engineer',
    description: `Full Stack Software Engineer, Jamstack enthusiast, and inquisitive mind.`,
    image: 'https://www.ivanguzman.dev/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://www.ivanguzman.dev/${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://www.ivanguzman.dev/${router.asPath}`}
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Ivan Guzman" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@zaku_dev" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.createdAt} />
      )}
    </Head>
  );
}
