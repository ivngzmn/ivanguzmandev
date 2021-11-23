import NextImage from 'next/image';

const projects = [
  {
    name: 'Project 1',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dbr8xxx2m/image/upload/v1637439561/project-images/todo-app_zukdrz.gif',
    imageAlt: 'Name of Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem nisi, tincidunt a neque maximus, congue porta nibh. Etiam faucibus massa dignissim, semper nisi vitae, placerat risus. Donec imperdiet ex est. Vivamus semper molestie commodo. Curabitur et lacus eu arcu rhoncus luctus. Morbi nec nisi euismod, egestas neque vel, tincidunt purus. Duis ex nibh, sollicitudin in egestas at, dignissim nec lacus. Donec vestibulum ac lacus vel gravida. Aliquam auctor sed massa nec ornare. Duis dui lorem, ultrices id elit quis, congue tincidunt felis. '
  },
  {
    name: 'Project 2',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627466096/project-images/React-pomo-app_dncbqs.gif',
    imageAlt: 'Name of Project Two.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem nisi, tincidunt a neque maximus, congue porta nibh. Etiam faucibus massa dignissim, semper nisi vitae, placerat risus. Donec imperdiet ex est. Vivamus semper molestie commodo. Curabitur et lacus eu arcu rhoncus luctus. Morbi nec nisi euismod, egestas neque vel, tincidunt purus. Duis ex nibh, sollicitudin in egestas at, dignissim nec lacus. Donec vestibulum ac lacus vel gravida. Aliquam auctor sed massa nec ornare. Duis dui lorem, ultrices id elit quis, congue tincidunt felis. '
  },
  {
    name: 'Project 3',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627949259/project-images/React_Markdown_editor_hkx3m3.png',
    imageAlt: 'Name of Project Three.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem nisi, tincidunt a neque maximus, congue porta nibh. Etiam faucibus massa dignissim, semper nisi vitae, placerat risus. Donec imperdiet ex est. Vivamus semper molestie commodo. Curabitur et lacus eu arcu rhoncus luctus. Morbi nec nisi euismod, egestas neque vel, tincidunt purus. Duis ex nibh, sollicitudin in egestas at, dignissim nec lacus. Donec vestibulum ac lacus vel gravida. Aliquam auctor sed massa nec ornare. Duis dui lorem, ultrices id elit quis, congue tincidunt felis. '
  }
];

export default function myProjects() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Lorem Ipsum
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem
          nisi, tincidunt a neque maximus, congue porta nibh. Etiam faucibus
          massa dignissim, semper nisi vitae, placerat risus. Donec imperdiet ex
          est. Vivamus semper molestie commodo. Curabitur et lacus eu arcu
          rhoncus luctus. Morbi nec nisi euismod, egestas neque vel, tincidunt
          purus. Duis ex nibh, sollicitudin in egestas at, dignissim nec lacus.
          Donec vestibulum ac lacus vel gravida. Aliquam auctor sed massa nec
          ornare. Duis dui lorem, ultrices id elit quis, congue tincidunt felis.
        </p>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {projects.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className=" rounded-lg overflow-hidden group-hover:opacity-75"
              >
                <NextImage
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover"
                  width={900}
                  height={1200}
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
