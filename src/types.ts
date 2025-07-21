type Destination = {
  description: string;
  distance: string;
  name: string;
  travel: string;
};

type Crew = {
  bio: string;
  name: string;
  role: string;
  images: {
    png: string;
    webp: string;
  };
};

type Technology = {
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
  name: string;
};

type Tourism = {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
};

export type { Technology, Destination, Crew, Tourism };
