import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Desarrollo de software',
      links: [
        {
          text: '💻👉 Cursos y contenido en desarrollo web',
          href:'/category/cursos-y-contenido-en-desarrollo-web'
        },
        // {
        //   text: '📱👉 Cursos y contenido en desarrollo móvil',
        //   href:'/revolucioncientificotecnologica'
        // },
        // {
        //   text: '🖥️👉 Cursos y contenido en desarrollo escritorio',
        //   href:'/decalogodelapaz'
        // },
        // {
        //   text: '🕸️👉 Cursos y contenido en frontend',
        //   href:'/losplanosdelapaz'
        // },
        // {
        //   text: '🔢👉 Cursos y contenido en backend',
        //   href:'/losplanosdelapaz'
        // },
        // {
        //   text: '🚀💻👉 Cursos y contenido en devops',
        //   href:'/losplanosdelapaz'
        // },
        // {
        //   text: '🧪👉 Cursos y contenido en testing',
        //   href:'/losplanosdelapaz'
        // }
      ],
    },
    {
      text: 'Rutas de aprendizaje',
      links: [
        {
          text: '💻👉 Ruta de cursos para el desarrollo web',
          href:'/losplanosdelapaz'
        },
      ],
    },
    {
      text: '📚Biblioteca',
      href: '/libro',
    },
    {
      text: '🐄Donación',
      href: 'https://vaki.co/es/vaki/g3xnciA3CaPczUdS5tLs?utm_source=copy&utm_medium=vaki-page&utm_campaign=v4',
    },
  ],
};
  
export const footerData = {
  links: [
  {
    title: 'Podcast/Blog:',
    links: [
      { text: 'Publicaciones', href: getPermalink('/blog') },
    ],
  },
  {
    title: 'Libros:',
    links: [
      { text: 'Libros', href: '/libro' },
    ],
  },
],
  secondaryLinks: [
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/sistemas_autoorganizados' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/sitemasautoorganizados' },
    { ariaLabel: 'RSS', icon: 'tabler:brand-spotify', href: 'https://podcasters.spotify.com/pod/show/sistemas-autoorgani' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://softwarehelpcenter.vercel.app/" target="_blank"> Software help center</a> · All rights reserved.
  `,
};
