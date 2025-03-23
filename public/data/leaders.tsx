const bioStyles = "mt-5 text-lg block";

export default function LeadersData() {
  return {
    content: [
      {
        img: "/folsom.png",
        name: "Sarah Folsom",
        role: "President",
        bio: (
          <>
            <span className={bioStyles}>
              Sarah Folson is a senior at Seymour High School in Seymour, CT.
              She has been the President of Seymour FBLA since 2023.
            </span>
          </>
        ),
        path: "folsom",
      },
      {
        img: "/khan.png",
        name: "Jastina Khand",
        role: "Vice President",
        path: "khand",
      },
      {
        img: "/kostick.png",
        name: "John Kostick",
        role: "Vice President",
        bio: "",
        path: "kostick",
      },
      {
        img: "none",
        name: "Ariana Alvarez",
        role: "Treasurer",
        bio: "",
        path: "alvarez",
      },
      {
        img: "/ter.png",
        name: "Izabel Ter",
        role: "Secretary",
        bio: "",
        path: "ter",
      },
    ],
  };
}
