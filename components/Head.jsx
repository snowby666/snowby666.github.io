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
      <meta property="og:image" content="https://cdn.discordapp.com/attachments/957946068836950026/1175783916150456432/image.png?ex=656c7d1a&is=655a081a&hm=70c8abc125a348a6f31ef0e9f61c208dac1b8e5a018660f551ccfd2bb6b352f0&" />
      <meta property="og:url" content="https://snowby666.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Bao Ngo',
};
