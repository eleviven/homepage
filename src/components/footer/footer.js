const TECHNOLOGIES_LIST = [
  {
    title: "Built with NextJs",
    icon: "/images/icon-next.png",
    url: "https://nextjs.org/",
  },
  {
    title: "Open source on github",
    icon: "/images/icon-github.png",
    url: "https://github.com/eleviven/homepage",
  },
  {
    title: "Hosted by Vercel",
    icon: "/images/icon-vercel.png",
    url: "https://vercel.com/",
  },
  {
    title: "CMS",
    icon: "/images/icon-contentful.png",
    url: "https://www.contentful.com/",
  },
];

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mt-16">
        <ul className="flex items-center justify-center flex-wrap py-4">
          {TECHNOLOGIES_LIST.map((item, index) => (
            <li key={index} className="mx-3">
              <a
                href={item.url}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 p-2 filter invert-0 dark:invert"
              >
                <img src={item.icon} alt={item.title} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
