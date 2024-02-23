import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Bao Ngo's Portfolio."
      />
      <meta
        name="keywords"
        content="bao ngo, snowby666, ngo dinh gia bao, software engineer portfolio, machine learning engineer, bao ngo portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Bao Ngo's Portfolio" />
      <meta
        property="og:description"
        content="Bao Ngo's Portfolio."
      />
      <meta property="og:image" content="https://cdn.discordapp.com/attachments/957946068836950026/1175783916150456432/image.png?ex=65e4759a&is=65d2009a&hm=591385915e13bba098180ebabcae88fbac3b77282d56422b8226c6e1cc0dad02&" />
      <meta property="og:url" content="https://snowby666.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Bao Ngo',
};
