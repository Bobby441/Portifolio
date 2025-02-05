import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/Bobby441'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/moru-sai-tirupathi-110033247/'
  },
  {
    title: 'LeetCode',
    href: 'https://leetcode.com/u/Qwertyuiop441/'
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/saitirupathimoru_441/'
  },
]

export const Footer = () => {
  return (
    <footer className='relative overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none z-0"></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                target='_blank'
                className='inline-flex items-center gap-1.5 z-10'
                style={{ position: 'relative' }}
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

