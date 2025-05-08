type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ritika Singh ",
    fullName: "Ritika Singh",
    email: "ritikasinghrs70330@gmail.com",
  },
  hero: {
    name: "Ritika Singh",
    p: ["I build full-stack applications with a focus on Web3 integration."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. Visionary full-stack developer with a robust understanding of modern web technologies and decentralized ecosystems,
       driving innovation and shaping the next generation of the web through impactful Web3 development.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `My portfolio demonstrates a proven ability to tackle complex challenges and deliver impactful solutions across diverse technologies. 
      Each project showcased below offers a tangible example of my skills and experience, complete with links to code repositories and live demonstrations, highlighting my capacity for effective project management and problem-solving.`,
    },
  },
};
