module.exports = {
  siteTitle: 'Manisha Korala | Software Engineer',
  siteDescription:
    'Manisha Korala is a software engineer based in Islamabad, PK who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Manisha Korala, ManishaKorala, software engineer, front-end engineer, web developer, javascript, islamabad',
  siteUrl: 'http://manishakorala.com',
  siteLanguage: 'en_US',
  name: 'Manisha Korala',
  location: 'Islamabad, PK',
  email: 'tanwani.manisha@gmail.com',
  github: 'https://github.com/ManishaKorala',
  twitterHandle: '@tanwani_manisha',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ManishaKorala',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/manisha-korala',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/manishakorala',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tanwani_manisha',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
