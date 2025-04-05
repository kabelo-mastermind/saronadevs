import { Code, ShoppingCart, Search, FileText, Server, BarChart } from 'lucide-react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';



import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures/user5.png";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [
  { label: "Features", href: "Features" },
  { label: "Workflow", href: "Workflow" },
  { label: "Pricing", href: "Pricing" },
  { label: "Testimonials", href: "Testimonials" },
];

export const testimonials = [
  {
    user: "Thandiwe Nkosi",
    company: "Innovative Tech Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Sipho Mthembu",
    company: "Eco-Friendly Designs",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Zanele Dlamini",
    company: "Future Vision Media",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Lerato Khumalo",
    company: "Dynamic Solutions Group",
    image: user4,
    text: "Working with the team at Saronadevs Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Mpho Modise",
    company: "Tech Savvy Innovations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Nandi Ngubane",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export const features = [
  {
    icon: <Code />,
    text: "Website Design and Development",
    description:
      "Creating custom, responsive websites that align with a company’s brand and business goals, including front-end and back-end development.",
  },  {
    icon: <FileText />,
    text: "Content Management Systems (CMS)",
    description:
      "Providing user-friendly systems for clients to easily manage and update their website content, such as WordPress, Joomla, or Drupal.",
  },
  
  {
    icon: <Search />,
    text: "Search Engine Optimization (SEO)",
    description:
      "Implementing strategies to improve website visibility and rankings on search engines, driving organic traffic and increasing online presence.",
  },{
    icon: <ShoppingCart />,
    text: "E-Commerce Solutions",
    description:
      "Developing and integrating online store platforms that facilitate secure transactions, inventory management, and a seamless shopping experience.",
  },

  {
    icon: <Server />,
    text: "Web Hosting and Maintenance",
    description:
      "Offering reliable hosting solutions and ongoing maintenance to ensure website performance, security, and uptime.",
  },
  {
    icon: <BarChart />,
    text: "Digital Marketing and Analytics",
    description:
      "Developing and executing digital marketing strategies, including social media marketing, email campaigns, and data analytics to track and optimize performance.",
  },
];

export const checklistItems = [
    {
      title: "Initial Consultation",
      description: "We discuss your business needs and objectives to tailor our services to your goals."
    },
    {
      title: "Project Planning",
      description: "We outline the project scope, timeline, and deliverables to ensure a clear path forward."
    },
    {
      title: "Design & Development",
      description: "Our team designs and develops your website or application to meet your specific requirements."
    },
    {
      title: "Testing & Quality Assurance",
      description: "We rigorously test the project to ensure it meets our quality standards and functions flawlessly."
    },
    {
      title: "Launch & Deployment",
      description: "We deploy your project and ensure a smooth transition to live status, with full support during the launch."
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "We provide continuous support and updates to keep your website or application running smoothly."
    }
  ];
  

export const pricingOptions = [
  {
    title: "Basic",
    price: "R2000",
    monthly: "/ once-off",
    features: [
      "Responsive Website Design",
      "Basic SEO Optimization",
      "1 Month Hosting single page",
      "Standard Support"
    ]
  },
  {
    title: "Professional",
    price: "R3000",
    monthly: "/ once-off",
    features: [
      "Custom Web Development",
      "Advanced SEO & Analytics",
      "2 Months Hosting single page",
      "Priority Support",
      "Content Management System"
    ]
  },
  {
    title: "Enterprise",
    price: "R5000",
    monthly: "/ once-off",
    features: [
      "Full-Scale Web Application",
      "Comprehensive SEO & Digital Marketing",
      "3 Months Hosting single page",
      "24/7 Support",
      "Advanced Analytics & Reporting",
      "Custom Integrations"
    ]
  }
];



//footer
export const resourcesLinks = [
  {  text: "Transform your business and bring your web ideas to life with our expert web development services. Our team combines intuitive tools, innovative solutions, and strategic SEO to ensure your website and web apps look stunning and perform flawlessly. Start today and turn your vision into digital success!" },
];


export const socialMediaLinks = [
  { href: "https://www.facebook.com/profile.php?id=100091164870890", text: "Facebook", icon: <FaFacebook /> },
  // { href: "https://www.twitter.com", text: "Twitter", icon: <FaTwitter /> },
  // { href: "https://www.instagram.com", text: "Instagram", icon: <FaInstagram /> },
  // { href: "https://www.linkedin.com", text: "LinkedIn", icon: <FaLinkedin /> },
  // { href: "https://www.youtube.com", text: "YouTube", icon: <FaYoutube /> },
];

export const communityLinks = [
  { href: "Features", text: "Features",},
  { href: "Workflow", text: "Workflow",},
  { href: "Pricing", text: "Pricing",},
  { href: "Testimonials", text: "Testimonials",},
];
