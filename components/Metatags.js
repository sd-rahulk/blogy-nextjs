import Head from 'next/head';

export default function Metatags({
  title = 'social by angleX',
  description = 'A web app developed by angleX for making blogs and  postes by everyone'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
