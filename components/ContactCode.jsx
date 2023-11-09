import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'giabao070206@gmail.com',
    href: 'mailto:giabao070206@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/ngodinhgiabao',
    href: 'https://www.linkedin.com/in/ngodinhgiabao/',
  },
  {
    social: 'GitHub',
    link: 'github.com/snowby666',
    href: 'https://github.com/snowby666',
  },
  {
    social: 'PyPi',
    link: 'pypi.org/user/snowby666',
    href: 'https://pypi.org/user/snowby666/',
  },
  {
    social: 'Website',
    link: 'snowby666.github.io',
    href: 'https://snowby666.github.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>colaboration</a>
        </p>
      <p className={styles.line}>
        <span>gia bao</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
