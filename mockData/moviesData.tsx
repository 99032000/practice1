const Data: {
  genres: Array<Object>;
  movies: Array<{ backdrop_path: string; title: string }>;
} = {
  genres: [
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 37,
      name: "Western",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 99,
      name: "Documentary",
    },
  ],
  movies: [
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/eDzUGAPSf6vv1J29MJM0jlCiDJL.jpg",
      genre_ids: [28, 12, 878],
      id: 102899,
      my_list: true,
      overview:
        "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/fddtVEUozxvLmehR5yGZjem44pD.jpg",
      title: "Ant-Man",
      vote_average: 7.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/kN0s7VCXZinNXP9qV0yDHOVrZn3.jpg",
      genre_ids: [28, 12, 878],
      id: 11,
      my_list: true,
      overview:
        "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      title: "Star Wars",
      vote_average: 8.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/mZSAu5acXueGC4Z3S5iLSWx8AEp.jpg",
      genre_ids: [28, 12, 878],
      id: 118340,
      my_list: true,
      overview:
        "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      title: "Guardians of the Galaxy",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
      genre_ids: [28, 12, 14],
      id: 120,
      my_list: true,
      overview:
        "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      title: "The Lord of the Rings",
      vote_average: 8.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
      genre_ids: [12, 14],
      id: 12445,
      my_list: false,
      overview:
        "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
      title: "Harry Potter and the Deathly Hallows: Part 2",
      vote_average: 8.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 140607,
      my_list: true,
      overview:
        "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/9rd002JS49RwDW944fF1wjU8iTV.jpg",
      title: "Star Wars: The Force Awakens",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/pyxkLUfC5TG1pPoB4bwjCz8Z5iG.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 141052,
      my_list: true,
      overview:
        "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
      title: "Justice League",
      vote_average: 6.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
      genre_ids: [28, 80, 18, 53],
      id: 155,
      my_list: false,
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      title: "The Dark Knight",
      vote_average: 8.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/9mmkq59uRuJWDFz9UHeX5ATNJYf.jpg",
      genre_ids: [12, 18, 878],
      id: 157336,
      my_list: false,
      overview:
        "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      title: "Interstellar",
      vote_average: 8.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vbY95t58MDArtyUXUIb8Fx1dCry.jpg",
      genre_ids: [28, 12, 878],
      id: 1726,
      my_list: true,
      overview:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      title: "Iron Man",
      vote_average: 7.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/iQh64TQiPoTK3yZ3duC3y0tKgy3.jpg",
      genre_ids: [28, 12, 878],
      id: 1771,
      my_list: false,
      overview:
        "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
      title: "Captain America: The First Avenger",
      vote_average: 6.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
      genre_ids: [28, 12, 878],
      id: 181808,
      my_list: true,
      overview:
        "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      title: "Star Wars: The Last Jedi",
      vote_average: 7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      genre_ids: [28, 12, 878],
      id: 181812,
      my_list: true,
      overview:
        "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      title: "Star Wars: The Rise of Skywalker",
      vote_average: 6.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/azIbQpeKKNF9r85lBSRrNnMK0Si.jpg",
      genre_ids: [28, 12, 878],
      id: 1891,
      my_list: false,
      overview:
        "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
      title: "The Empire Strikes Back",
      vote_average: 8.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/soJdiy91Mcyj29GzEgZ5svFcuZg.jpg",
      genre_ids: [28, 12, 878],
      id: 1892,
      my_list: false,
      overview:
        "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/mDCBQNhR6R0PVFucJl0O4Hp5klZ.jpg",
      title: "Return of the Jedi",
      vote_average: 8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/iYFvlq53FjhPeB5bjdP5UVeeJl2.jpg",
      genre_ids: [28, 12, 878],
      id: 1893,
      my_list: true,
      overview:
        "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
      title: "Star Wars: Episode I - The Phantom Menace",
      vote_average: 6.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/uuh6uNEGqLCU7wQ2L4xMqYv0DPr.jpg",
      genre_ids: [28, 12, 878],
      id: 1895,
      my_list: true,
      overview:
        "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
      title: "Star Wars: Episode III - Revenge of the Sith",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/eS8rJ1KzRNBewx9MduiSHM4kr7S.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 19995,
      my_list: false,
      overview:
        "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/btnl50ZDJDSCal2NLQIYWw0XxvH.jpg",
      title: "Avatar",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg",
      genre_ids: [28, 12, 14],
      id: 209112,
      my_list: false,
      overview:
        "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
      title: "Batman v Superman: Dawn of Justice",
      vote_average: 5.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
      genre_ids: [28, 12, 878],
      id: 24428,
      my_list: false,
      overview:
        "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      poster_path:
        "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      title: "The Avengers",
      vote_average: 7.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
      genre_ids: [28, 12, 878],
      id: 271110,
      my_list: false,
      overview:
        "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8xA9XQ6KfvXFKcNLNRWSPT39Gaz.jpg",
      title: "Captain America: Civil War",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
      genre_ids: [28, 80, 18],
      id: 272,
      my_list: false,
      overview:
        "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
      title: "Batman Begins",
      vote_average: 7.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      genre_ids: [28, 12, 878],
      id: 27205,
      my_list: true,
      overview:
        "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      title: "Inception",
      vote_average: 8.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 284054,
      my_list: false,
      overview:
        "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      title: "Black Panther",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
      genre_ids: [28, 12, 878],
      id: 290859,
      my_list: false,
      overview:
        "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/i8QWXu6dGuTKKerJtnd0A4lUpbv.jpg",
      title: "Terminator: Dark Fate",
      vote_average: 6.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
      genre_ids: [28, 12, 14],
      id: 297762,
      my_list: false,
      overview:
        "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
      title: "Wonder Woman",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
      genre_ids: [28, 12, 14],
      id: 297802,
      my_list: false,
      overview:
        "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
      title: "Aquaman",
      vote_average: 6.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
      genre_ids: [28, 12, 878],
      id: 299534,
      my_list: false,
      overview:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      title: "Avengers: Endgame",
      vote_average: 8.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
      genre_ids: [28, 12, 878],
      id: 299536,
      my_list: false,
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      vote_average: 8.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
      genre_ids: [28, 12, 878],
      id: 299537,
      my_list: false,
      overview:
        "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
      title: "Captain Marvel",
      vote_average: 7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
      genre_ids: [28, 12, 18, 878],
      id: 315635,
      my_list: false,
      overview:
        "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      title: "Spider-Man: Homecoming",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/pNbmSYUtMd542OATplZIdtSWKyz.jpg",
      genre_ids: [12, 16, 10751],
      id: 330457,
      my_list: false,
      overview:
        "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      title: "Frozen II",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/6t8ES1d12OzWyCGxBeDYLHoaDrT.jpg",
      genre_ids: [28, 12, 878],
      id: 330459,
      my_list: true,
      overview:
        "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg",
      title: "Rogue One: A Star Wars Story",
      vote_average: 7.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
      genre_ids: [18, 878],
      id: 335984,
      my_list: false,
      overview:
        "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      title: "Blade Runner 2049",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      genre_ids: [28, 878],
      id: 338762,
      my_list: false,
      overview:
        "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      title: "Bloodshot",
      vote_average: 7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/t93doi7EzoqLFckidrGGnukFPwd.jpg",
      genre_ids: [28, 80, 53],
      id: 339095,
      my_list: false,
      overview:
        "In the not-too-distant future, where as a final response to crime and terrorism, the U.S. government plans to broadcast a signal that will make it impossible for anyone to knowingly break the law.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ygCQnDEqUEIamBpdQdDYnFfxvgM.jpg",
      title: "The Last Days of American Crime",
      vote_average: 5.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
      genre_ids: [27, 878],
      id: 348,
      my_list: false,
      overview:
        "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
      title: "Alien",
      vote_average: 8.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg",
      genre_ids: [28, 12],
      id: 353081,
      my_list: false,
      overview:
        "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      title: "Mission: Impossible - Fallout",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/n3UanIvmnBlH531pykuzNs4LbH6.jpg",
      genre_ids: [28, 18],
      id: 359724,
      my_list: false,
      overview:
        "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
      title: "Ford v Ferrari",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
      genre_ids: [28, 12, 35],
      id: 384018,
      my_list: false,
      overview:
        "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
      poster_path:
        "https://image.tmdb.org/t/p/w500/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
      title: "Fast & Furious Presents: Hobbs & Shaw",
      vote_average: 6.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
      genre_ids: [12, 16, 35, 9648, 10751],
      id: 385103,
      my_list: false,
      overview:
        "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
      title: "Scoob!",
      vote_average: 8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
      genre_ids: [28, 80, 53],
      id: 38700,
      my_list: false,
      overview:
        "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
      title: "Bad Boys for Life",
      vote_average: 7.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg",
      genre_ids: [28, 12, 878],
      id: 399579,
      my_list: false,
      overview:
        "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg",
      title: "Alita: Battle Angel",
      vote_average: 7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      genre_ids: [18, 878],
      id: 419704,
      my_list: false,
      overview:
        "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      title: "Ad Astra",
      vote_average: 6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
      genre_ids: [12, 14, 10751],
      id: 420809,
      my_list: false,
      overview:
        "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg",
      title: "Maleficent: Mistress of Evil",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
      genre_ids: [12, 35, 14, 10749, 10751],
      id: 420817,
      my_list: false,
      overview:
        "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
      title: "Aladdin",
      vote_average: 7.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
      genre_ids: [12, 10751],
      id: 420818,
      my_list: false,
      overview:
        "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      title: "The Lion King",
      vote_average: 7.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/8YpXQS3zo25ZexQVkQyhsLlzINB.jpg",
      genre_ids: [80, 18],
      id: 429422,
      my_list: false,
      overview:
        "The 47-year old Al Capone, after 10 years in prison, starts suffering from dementia and comes to be haunted by his violent past.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/75gDv38UgRtAukSxNXcjatyQmEa.jpg",
      title: "Capone",
      vote_average: 5.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      genre_ids: [28, 12, 878],
      id: 429617,
      my_list: true,
      overview:
        "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
      title: "Spider-Man: Far from Home",
      vote_average: 7.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/lwSOhnpwrzjtKi2RD3e5RAcGzvt.jpg",
      genre_ids: [28, 12, 16, 35],
      id: 431693,
      my_list: true,
      overview:
        "Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites. Lance is smooth, suave and debonair. Walter is… not. But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions. But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/30YacPAcxpNemhhwX0PVUl9pVA3.jpg",
      title: "Spies in Disguise",
      vote_average: 7.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg",
      genre_ids: [28, 27, 878, 53],
      id: 443791,
      my_list: true,
      overview:
        "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg",
      title: "Underwater",
      vote_average: 6.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
      genre_ids: [12, 16, 35, 14, 10402, 10751],
      id: 446893,
      my_list: false,
      overview:
        "Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
      title: "Trolls World Tour",
      vote_average: 7.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/xcUf6yIheo78btFqihlRLftdR3M.jpg",
      genre_ids: [12, 35, 14, 10751],
      id: 448119,
      my_list: false,
      overview:
        "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xnjvwfDulnOCy8qtYX0iqydmMhk.jpg",
      title: "Dolittle",
      vote_average: 6.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ibMSQUtltvnmsOSrCsBrDNThzCu.jpg",
      genre_ids: [28, 35, 878, 10751],
      id: 454626,
      my_list: true,
      overview:
        "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      title: "Sonic the Hedgehog",
      vote_average: 7.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
      genre_ids: [28, 80, 53],
      id: 458156,
      my_list: false,
      overview:
        "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
      title: "John Wick: Chapter 3 - Parabellum",
      vote_average: 7.3,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/aQLygZOIKai6aaiBAeeKpIWO5nc.jpg",
      genre_ids: [35, 18, 53],
      id: 466272,
      my_list: false,
      overview:
        "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      title: "Once Upon a Time… in Hollywood",
      vote_average: 7.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/sxI7nxy18fapiE1XNBuiQaIQhlS.jpg",
      genre_ids: [18, 36, 28],
      id: 468816,
      my_list: true,
      overview:
        "The Mongol Empire had grown to the largest the world had ever known. It's armies now laid siege to much of Eastern Europe. A small village fights for freedom in the frontier landscape of the Carpathian Mountains.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/nYsG5NYWgd2TloMLENxQl0yhjA6.jpg",
      title: "The Rising Hawk",
      vote_average: 6.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/2hV2clTCW55dwTLCZcOvvidjjrV.jpg",
      genre_ids: [18, 27, 53],
      id: 474764,
      my_list: false,
      overview:
        "When a father is forced to abruptly depart for work, he leaves his children, Aidan and Mia, at their holiday home in the care of his new girlfriend, Grace. Isolated and alone, a blizzard traps them inside the lodge as terrifying events summon specters from Grace's dark past.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/yake2myhbW7c6dKbmwYDy1i40bm.jpg",
      title: "The Lodge",
      vote_average: 6.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      genre_ids: [80, 18, 53],
      id: 475557,
      my_list: false,
      overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      title: "Joker",
      vote_average: 8.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
      genre_ids: [12, 18, 10751],
      id: 481848,
      my_list: false,
      overview:
        "Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
      title: "The Call of the Wild",
      vote_average: 7.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/kvbbK2rLGSJh9rf6gg1i1iVLYQS.jpg",
      genre_ids: [28, 35, 80],
      id: 495764,
      my_list: false,
      overview:
        "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
      title:
        "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
      vote_average: 7.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
      genre_ids: [35, 18, 53],
      id: 496243,
      my_list: false,
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      title: "Parasite",
      vote_average: 8.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      genre_ids: [12, 16, 35, 14, 10751],
      id: 508439,
      my_list: false,
      overview:
        "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      title: "Onward",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/y6nOwPsMzEj5DmwPtr2OsH6EiGS.jpg",
      genre_ids: [18, 53],
      id: 509585,
      my_list: false,
      overview: "A pilot's aircraft is hi-jacked by terrorists.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/nrW048JoWofimI5AKXDTBzvxqRr.jpg",
      title: "7500",
      vote_average: 4.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
      genre_ids: [12, 35, 14],
      id: 512200,
      my_list: false,
      overview:
        "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
      title: "Jumanji: The Next Level",
      vote_average: 6.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg",
      genre_ids: [28, 27, 53],
      id: 514847,
      my_list: false,
      overview:
        "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
      title: "The Hunt",
      vote_average: 6.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/lTyikzfGgRX5ZqIfVeT26APYfRL.jpg",
      genre_ids: [35, 18, 10752],
      id: 515001,
      my_list: false,
      overview:
        "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
      title: "Jojo Rabbit",
      vote_average: 8.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
      genre_ids: [28, 35, 80],
      id: 522627,
      my_list: false,
      overview:
        "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
      title: "The Gentlemen",
      vote_average: 7.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/nj84vpuUWdbmYktBzjiWn5Ny1ZF.jpg",
      genre_ids: [18],
      id: 525661,
      my_list: false,
      overview:
        "Bombshell is a revealing look inside the most powerful and controversial media empire of all time; and the explosive story of the women who brought down the infamous man who created it.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/gbPfvwBqbiHpQkYZQvVwB6MVauV.jpg",
      title: "Bombshell",
      vote_average: 6.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5mubFanEHVFJff4jLQH0uIOThMz.jpg",
      genre_ids: [18],
      id: 529485,
      my_list: false,
      overview:
        "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high school basketball team at his alma mater.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ylPnfaphW3FrLBUVwAREVtiL9My.jpg",
      title: "The Way Back",
      vote_average: 6.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
      genre_ids: [10752, 18, 28, 36],
      id: 530915,
      my_list: true,
      overview:
        "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      title: "1917",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/MmDgXMjZhD7rSH74mPrQj3uZaI.jpg",
      genre_ids: [80, 18, 10749],
      id: 536743,
      my_list: false,
      overview:
        "While on a forgettable first date together in Ohio, a black man and a black woman are pulled over for a minor traffic infraction. The situation escalates, with sudden and tragic results.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/sH2s6IcU9OTc6KoJuJ6XwA6kTcy.jpg",
      title: "Queen & Slim",
      vote_average: 7.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/4F8M02OjkfDIIBg36R5ZluLK2nU.jpg",
      genre_ids: [35, 18, 14],
      id: 536869,
      my_list: false,
      overview:
        "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/aCNch5FmzT2WaUcY44925owIZXY.jpg",
      title: "Cats",
      vote_average: 4.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/27WkMAcrLJYgmJcgbNvzMh2qw70.jpg",
      genre_ids: [12, 14, 27],
      id: 539537,
      my_list: false,
      overview:
        "A group of contest winners arrive at an island hotel to live out their dreams, only to find themselves trapped in nightmare scenarios.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/8ZMrZGGW65ePWIgRn1260nA1uUm.jpg",
      title: "Fantasy Island",
      vote_average: 6.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
      genre_ids: [28, 18, 53],
      id: 545609,
      my_list: false,
      overview:
        "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
      poster_path:
        "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
      title: "Extraction",
      vote_average: 7.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
      genre_ids: [35, 80, 18, 9648, 53],
      id: 546554,
      my_list: false,
      overview:
        "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      title: "Knives Out",
      vote_average: 7.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/s4avnIOcWxrNgmS1jQf9PVtf7gd.jpg",
      genre_ids: [18, 53],
      id: 547017,
      my_list: false,
      overview:
        "A famous horror writer finds inspiration for her next book after she and her husband take in a young couple.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/iSwTnNS7TKAS79Sz9LvyqlBxxrU.jpg",
      title: "Shirley",
      vote_average: 6.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/5GbkL9DDRzq3A21nR7Gkv6cFGjq.jpg",
      genre_ids: [35, 18, 10749],
      id: 556678,
      my_list: false,
      overview:
        "In 1800s England, a well-meaning but selfish young woman meddles in the love lives of her friends.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/sm8iVzA7kRp0d4BSIsgXjsSBMKV.jpg",
      title: "Emma.",
      vote_average: 7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/lVSMgZUBE4XTVaPBEBAczre4f1W.jpg",
      genre_ids: [9648, 878],
      id: 565743,
      my_list: false,
      overview:
        "At the dawn of the space-race, two radio-obsessed teens discover a strange frequency over the airwaves in what becomes the most important night of their lives and in the history of their small town.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/suORidtGKPO6tWwNqiwGvNo85z3.jpg",
      title: "The Vast of Night",
      vote_average: 6.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ize3ZieqSy0TCWljmVoEiy8fSFS.jpg",
      genre_ids: [12, 16, 18, 14, 10749],
      id: 568160,
      my_list: false,
      overview:
        'Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother.\r Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo\'s unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a "sunshine girl"—someone who will clear the sky for people when they need it the most.\r Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...',
      poster_path:
        "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
      title: "Weathering with You",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
      genre_ids: [27, 878, 53],
      id: 570670,
      my_list: false,
      overview:
        "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg",
      title: "The Invisible Man",
      vote_average: 7.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/4phMeITqEnShF5C3ZD0Q8YQFMAB.jpg",
      genre_ids: [28, 878, 53],
      id: 574982,
      my_list: false,
      overview:
        "No meteorites hit Earth, no terrorists put the world in danger, no atomic war was started, but something did go wrong. Contact between most towns on Earth has been severed. A small ring-like area in Eastern Europe still has electricity, and maybe even life is being reported from the Space. What military forces find outside the Ring is shocking. There are dead corpses everywhere: in stores, in cars, on roads, in hospitals and railway stations. Who or what is destroying all life on Earth? How long will the last outpost of mankind survive?",
      poster_path:
        "https://image.tmdb.org/t/p/w500/avl9MEQhtvokNnzoWepkmHBZ2ss.jpg",
      title: "The Blackout",
      vote_average: 6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/dwcazDHJQmC1euuc7oVvDHMRuCv.jpg",
      genre_ids: [28, 35, 10749],
      id: 576156,
      my_list: false,
      overview:
        "A couple experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery. As their journey to clear their names takes them from one extreme – and hilarious - circumstance to the next, they must figure out how they, and their relationship, can survive the night.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5jdLnvALCpK1NkeQU1z4YvOe2dZ.jpg",
      title: "The Lovebirds",
      vote_average: 6.4,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg",
      genre_ids: [27, 53, 12],
      id: 578,
      my_list: false,
      overview:
        "When an insatiable great white shark terrorizes the townspeople of Amity Island, the police chief, an oceanographer and a grizzled shark hunter seek to destroy the blood-thirsty beast.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/s2xcqSFfT6F7ZXHxowjxfG0yisT.jpg",
      title: "Jaws",
      vote_average: 7.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/1xQtvgay8rDwSaZPwyhcecqV8UD.jpg",
      genre_ids: [35, 10749],
      id: 582596,
      my_list: false,
      overview:
        "A guy meets the woman of his dreams and invites her to his company's corporate retreat, but realizes he sent the invite to the wrong person.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg",
      title: "The Wrong Missy",
      vote_average: 6.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/qTrpw2ZUvN7ywUu1kieEsvNDrgQ.jpg",
      genre_ids: [53, 28],
      id: 601844,
      my_list: false,
      overview:
        "A teenager's weekend at a lake house with her father takes a turn for the worse when a group of convicts wreaks havoc on their lives.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xqbQtMffXwa3oprse4jiHBMBvdW.jpg",
      title: "Becky",
      vote_average: 6.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/fssh5GyRUrXcS8OtX1b2sVAGh0l.jpg",
      genre_ids: [18, 9648, 53],
      id: 602147,
      my_list: false,
      overview:
        "A patriarch of a wealthy and powerful family suddenly passes away, leaving his wife and daughter with a shocking secret inheritance that threatens to unravel and destroy their lives.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/l13mt3oHErSkkqJbN1bjzgtK0Vq.jpg",
      title: "Inheritance",
      vote_average: 0,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
      genre_ids: [28, 878],
      id: 603,
      my_list: false,
      overview:
        "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      title: "The Matrix",
      vote_average: 8.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/2jHGYnzX7OxTLMS5MFOht6tf0Wn.jpg",
      genre_ids: [35, 18, 10402, 10749],
      id: 606679,
      my_list: false,
      overview:
        "Set in the dazzling world of the LA music scene comes the story of Grace Davis, a superstar whose talent, and ego, have reached unbelievable heights. Maggie is Grace’s overworked personal assistant who’s stuck running errands, but still aspires to her childhood dream of becoming a music producer. When Grace’s manager presents her with a choice that could alter the course of her career, Maggie and Grace come up with a plan that could change their lives forever.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/rKqngCseJ8rs4SK6ex3WsMV098T.jpg",
      title: "The High Note",
      vote_average: 7.8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg",
      genre_ids: [28, 12, 16, 14, 878],
      id: 618344,
      my_list: false,
      overview:
        "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
      title: "Justice League Dark: Apokolips War",
      vote_average: 8.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/prnq2ONhqo9Tga7dOMZKgFJMofs.jpg",
      genre_ids: [80, 53],
      id: 620883,
      my_list: false,
      overview:
        'Police officer Pipa works on her first big case while simultaneously investigating her boss, who is suspected of murder. The prequel to "Perdida".',
      poster_path:
        "https://image.tmdb.org/t/p/w500/m2rJGjlesDKxugl7ypW8n3Mipjl.jpg",
      title: "Intuition",
      vote_average: 6.1,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vXUX7Qi4rtOh2TxqA1eB2CU6QAo.jpg",
      genre_ids: [28, 35, 80],
      id: 647785,
      my_list: false,
      overview:
        "A pair of debt collectors are thrust into an explosively dangerous situation, chasing down various lowlifes while also evading a vengeful kingpin.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/nZzOPD5EPLWss5t3ZCrkpEkuBxl.jpg",
      title: "Debt Collectors",
      vote_average: 4.2,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/gePCMmgv7r2DUO4pHZY2JE6fkKJ.jpg",
      genre_ids: [18, 10749],
      id: 664413,
      my_list: false,
      overview:
        "Laura, in order to save her relationship from falling apart, goes to Sicily, where she meets Massimo. A dangerous man, the head of a mafia family, kidnaps her and gives her 365 days to fall in love with him.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/plWcrWkuIPbNgQlIFwDr6jt2Mld.jpg",
      title: "365 Days",
      vote_average: 6.6,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      genre_ids: [12, 14, 10751],
      id: 671,
      my_list: false,
      overview:
        "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      title: "Harry Potter and the Philosopher's Stone",
      vote_average: 7.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/cVnCwyaKP7exbgaCMR9DJS4xleZ.jpg",
      genre_ids: [28, 53],
      id: 686245,
      my_list: false,
      overview:
        "A disgraced doctor and his family are held hostage at their home by criminals on the run, when a robbery-gone-awry requires them to seek immediate medical attention.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg",
      title: "Survive the Night",
      vote_average: 5.7,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/z0AhDPXIxuZBJGDojlpdbvPAnFg.jpg",
      genre_ids: [28, 12, 16, 35, 878, 10751],
      id: 690369,
      my_list: false,
      overview:
        "It’s high time the Justice League took notice of Shazam, but joining the world’s greatest team of superheroes is a lot harder when they’ve all been turned into kids.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ziIyuNNNwYqv0qbOpV9VvvdnRBb.jpg",
      title: "LEGO DC: Shazam! Magic and Monsters",
      vote_average: 8,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/3i2xnGLUAteDpSke5C9w2fhYmfL.jpg",
      genre_ids: [28],
      id: 702936,
      my_list: false,
      overview:
        "Special Ops sniper Brandon Beckett is set up as the primary suspect for the murder of a foreign dignitary on the eve of signing a high-profile trade agreement with the United States. Narrowly escaping death, Beckett realizes that there may be a dark operative working within the government, and partners with the only person whom he can trust: his father, legendary sniper Sgt. Thomas Beckett. Both Becketts are on the run from the CIA, Russian mercenaries and Lady Death, a Yakuza-trained assassin with sniper skills that rival both legendary sharpshooters.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/20TZbCFTCyfTwkDJ3F060elYaKX.jpg",
      title: "Sniper: Assassin's End",
      vote_average: 0,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/vSZtQrlJqgjz4GIbnF3kBDkzJFE.jpg",
      genre_ids: [28, 18],
      id: 744,
      my_list: false,
      overview:
        "For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
      title: "Top Gun",
      vote_average: 6.9,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
      genre_ids: [28, 12, 878],
      id: 76341,
      my_list: false,
      overview:
        "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/sQuxceRcV3cxKH5CAnAUZe0qFKS.jpg",
      title: "Mad Max: Fury Road",
      vote_average: 7.5,
    },
    {
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/8i6ZDk97Vyh0jHohMG4vFeFuKJh.jpg",
      genre_ids: [28, 12, 878],
      id: 99861,
      my_list: false,
      overview:
        "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
      title: "Avengers: Age of Ultron",
      vote_average: 7.3,
    },
  ],
};

export default Data;
