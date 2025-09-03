const bioStyles = "mt-5 text-lg block";

export default function LeadersData() {
  return {
    content: [
      {
        img: "none",
        name: "Ariana Alvarez",
        role: "President",
        bio: (
          <>
            <span className={bioStyles}>
              Ariana Alvarez is a senior at Seymour High School and the current
              President of the Seymour High School FBLA chapter. In her
              freetime, Alvarez enjoys playing soccer.
            </span>
          </>
        ),
        path: "alvarez",
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Pipo_de_Clown.png",
        name: "Ryan Dong",
        role: "Vice President",
        bio: (
          <>
            <span className={bioStyles}>
              Ryan Dong is a senior at Seymour High School and the current Vice
              President of the Seymour High School FBLA chapter. A studious
              scholar, Dong is currently ranked in the top 10 of the senior
              class.
            </span>
          </>
        ),
        path: "dong",
      },
      {
        img: "none",
        name: "Zackery Nook",
        role: "Treasurer",
        bio: (
          <>
            <span className={bioStyles}>
              Zackery Nook is a senior at Seymour High School and the current
              Treasurer of the Seymour High School FBLA chapter. In his
              freetime, Nook enjoys talking to freshmen.
            </span>
          </>
        ),
        path: "nook",
      },
      {
        img: "none",
        name: "William Lee",
        role: "Secretary",
        bio: (
          <>
            <span className={bioStyles}>
              William Lee is a senior at Seymour High School and the current
              Secretary of the Seymour High School FBLA chapter.
            </span>
          </>
        ),
        path: "lee",
      },
    ],
  };
}
