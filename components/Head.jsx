import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Bao Ngo's Profolio."
      />
      <meta
        name="keywords"
        content="bao ngo, snowby666, ngo dinh gia bao, software engineer portfolio, machine learning engineer, bao ngo portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Bao Ngo's Portfolio" />
      <meta
        property="og:description"
        content="Bao Ngo's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://snowby666.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Bao Ngo',
};
