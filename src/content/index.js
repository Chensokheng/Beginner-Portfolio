export default {
  nav: {
    logo: 'CC',
    links: ['Work', 'Contact'],
  },
  header: {
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    text: ['Hi!', "It's me Random.", 'I am '],
    typical: [
      'web developer. 🖥',
      2000,
      'Youtuber. 📹',
      2000,
      'Mobile Developer',
      2000,
    ],
    btnText: 'Discover More',
  },
  work: {
    title: 'Projects',
    img: process.env.PUBLIC_URL + '/assets/project-mobile.png',
    projectName: 'Sleeping',
    desc:
      'peaceful, and tranquil mean quiet and free from disturbance. calm is used when someone is not excited or upset even when there is cause for it. They stayed calm during the fire. peaceful is used when someone or something has reached a quiet state after some period of disturbance.',
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/react.svg',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    socials: [
      {
        alt: 'facebook',
        img: process.env.PUBLIC_URL + '/assets/facebook.png',
      },
      {
        alt: 'github',
        img: process.env.PUBLIC_URL + '/assets/github.png',
      },
      {
        alt: 'link',
        img: process.env.PUBLIC_URL + '/assets/link.png',
      },
      {
        alt: 'gmail',
        img: process.env.PUBLIC_URL + '/assets/gmail.png',
      },
    ],
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
  },
};
