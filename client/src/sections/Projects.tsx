import Image from "next/image";
import BacalaImage from '@/assets/images/bacala.png'
import InsiderJobsImage from '@/assets/images/insiderjobs.png'
import ImagifyImage from '@/assets/images/imagify.png'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Bacala",
    year: "2025",
    title: "MERN Based Book Store Application",
    results: [
      { title: "Authentication and security protocols for login and signup management" },
      { title: "Payment integration via Stripe and cash on delivery" },
      { title: "Cloudinary integration for scalable image storage " },
    ],
    link: "https://bacala-frontend.vercel.app/",
    image: BacalaImage,
  },
  {
    company: "Insider Jobs",
    year: "2024",
    title: "MERN Based Job Portal Application",
    results: [
      { title: "Role-based access for companies and job seekers" },
      { title: "Streamlined process for uploading and editing resumes and profile pictures through integration of Cloudinary" },
      { title: "Job browsing, location-based filtering, category-specific searches, applying for jobs" },
    ],
    link: "https://job-portal-client-delta.vercel.app/",
    image: InsiderJobsImage,
  },
  {
    company: "Imagify",
    year: "2024",
    title: "AI Powered Image Generator",
    results: [
      { title: "AI-driven image generation application with secure user authentication." },
      { title: "Functionality for text prompt-based image creation, and credit management" },
      { title: "Streamlined credit purchase by implementing Razorpay" },
    ],
    link: "https://imagify-1-bw7l.onrender.com/",
    image: ImagifyImage,
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{ top: `calc(64px + ${projectIndex * 40}px)`}}>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className='size-5 md:size-6 flex-shrink-0' />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank">
                  <button type="button" className="bg-white text-gray-950 h-1/2 lg:h-12 w-full md:w-auto px-6 py-2 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className='size-4' />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
