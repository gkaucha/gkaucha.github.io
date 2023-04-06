import { defaultTheme } from '@vuepress/theme-default'

export default ({
  lang: 'en-US',
  title: 'IT Notes',
  description: 'Notes on computer programming, networking, security and others.',

  theme: defaultTheme({

    logo: '/images/linux.png',

    navbar: [
      {
        text: 'Blog',
        link: '/blog/README.md',
      },
      
      // dropdown
      // {
      //   text: 'IT Notes',
      //   children: ['/networking/README.md', '/programming/README.md'],
      // }

    ],

    sidebar:  [

      
      {
        text: 'Programming',
        collapsible: true,
        children: ['/programming/basics/basics-of-programming.md',
                  '/programming/processor-and-assembly-language/processor-and-assembly-language.md',
                  '/programming/memory-segmentation/memory-segmentation.md',
                  '/programming/building-on-basics/building-on-basics.md',
        ],
      },
      {
        text: 'Networking',
        collapsible: true,
        children: ['/networking/basics/basics-on-networking.md',
                  '/networking/denial-of-service/README.md',
                  '/networking/network-sniffing/README.md',
                  '/networking/port-scanning/README.md',
                  '/networking/tcp-ip-hijacking/README.md',
        ],
      },
      {
        text: 'Cybersecurity Basics',
        collapsible: true,
        children: ['/cybersecurity-basics/README.md',
                  '/cybersecurity-basics/countermeasures/countermeasures.md',
                  '/cybersecurity-basics/cryptology/cryptology.md',
                  '/cybersecurity-basics/exploitation/exploitation.md',
                  '/cybersecurity-basics/shellcode/shellcode.md',
                  '/cybersecurity-basics/bhpp/black-hat-python.md',
        ],
      },

      {
        text: 'Privacy, Security & Compliance',
        collapsible: true,
        children: ['/privacy-security-compliance/grc/README.md',
        ],
      },

      {
        text: 'DevOps',
        collapsible: true,
        children: ['/devOps/docker.md'],
      },

      {
        text: 'Certifications',
        collapsible: true,
        children: ['/certifications/CEH 312-50/README.md',
        ],
      },

        
    ],

    

      
  }),

})

