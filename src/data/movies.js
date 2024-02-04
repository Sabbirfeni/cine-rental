const data = [
  {
    id: crypto.randomUUID(),
    cover: "movie21.jfif",
    title: "Godzila VS Kong",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    favourite: false,
    newRelease: false,
    watchLater: true,
    commingSoon: false,
  },

  {
    id: crypto.randomUUID(),
    cover: "movie1.jfif",
    title: "Cover",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    favourite: false,
    newRelease: false,
    watchLater: false,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie12.jfif",
    title: "Black Panther",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    favourite: false,
    newRelease: true,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie13.jfif",
    title: "Harrey Potter",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    favourite: false,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie14.jfif",
    title: "Assassin",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    favourite: false,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time... in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    favourite: true,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },

  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    favourite: false,
    newRelease: true,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie15.jfif",
    title: "Impertium",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    favourite: true,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie16.jfif",
    title: "FEM",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    favourite: false,
    newRelease: false,
    watchLater: false,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    favourite: true,
    newRelease: true,
    watchLater: true,
    commingSoon: false,
  },

  {
    id: crypto.randomUUID(),
    cover: "movie17.jfif",
    title: "I Am Legend",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    favourite: false,
    newRelease: true,
    watchLater: false,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie18.jfif",
    title: "Beekeeper",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    favourite: true,
    newRelease: false,
    watchLater: true,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie19.jfif",
    title: "I Am Number Four",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    favourite: false,
    newRelease: true,
    watchLater: false,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie20.jfif",
    title: "The Last Duel",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    favourite: true,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },

  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    favourite: true,
    newRelease: true,
    watchLater: false,
    commingSoon: true,
  },

  {
    id: crypto.randomUUID(),
    cover: "movie26.jfif",
    title: "21 Jump Street",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    favourite: true,
    newRelease: false,
    watchLater: true,
    commingSoon: false,
  },

  {
    id: crypto.randomUUID(),
    cover: "movie22.jfif",
    title: "Walking With Enemy",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    favourite: true,
    newRelease: false,
    watchLater: false,
    commingSoon: false,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie25.jfif",
    title: "Joker",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    favourite: true,
    newRelease: true,
    watchLater: false,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie23.jfif",
    title: "Fury",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    favourite: true,
    newRelease: false,
    watchLater: true,
    commingSoon: true,
  },
  {
    id: crypto.randomUUID(),
    cover: "movie24.jfif",
    title: "Into The Woods",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    favourite: false,
    newRelease: false,
    watchLater: false,
    commingSoon: true,
  },
];

function getAllMovies() {
  return data;
}

function geFavouriteMovies() {
  return data.filter((movie) => movie.favourite === true);
}

function getNewReleaseMovies() {
  return data.filter((movie) => movie.newRelease === true);
}

function getComingSoonMovies() {
  return data.filter((movie) => movie.commingSoon === true);
}

function getWatchLaterMovies() {
  return data.filter((movie) => movie.watchLater === true);
}
export {
  geFavouriteMovies,
  getAllMovies,
  getComingSoonMovies,
  getNewReleaseMovies,
  getWatchLaterMovies,
};
