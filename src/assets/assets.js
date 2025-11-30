import logo from './Cinespot.svg'
import LokahLogo from './LokahLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'
import bgImage from './lokah-bg.png'
export const assets = {
    logo,
    LokahLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    bgImage
}

export const dummyTrailers = [
    {
        image: "https://img.onmanorama.com/content/dam/mm/en/archive/entertainment/entertainment-news/images/2025/7/27/lokah-one.jpg?w=1120&h=583",
        videoUrl: 'https://www.youtube.com/watch?v=64XHtNWTB5o'
    },
    {
        image: "https://images.filmibeat.com/img/2025/09/kantara2trailermain-1758085147.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=DzYYmTbsN84'
    },
    {
        image: "https://media.newindianexpress.com/newindianexpress%2F2025-07-13%2Fuz1t5cck%2Fdies-irae-poster.JPG?rect=0%2C182%2C695%2C391&w=480&auto=format%2Ccompress&fit=max",
        videoUrl: 'https://www.youtube.com/watch?v=S1FGXOamA5I'
    },
    {
        image: "https://th-i.thgim.com/public/entertainment/movies/6wmxdh/article69302631.ece/alternates/LANDSCAPE_1200/Bison%20Kaalamaadan.jpeg",
        videoUrl: 'https://www.youtube.com/watch?v=GPwRRVdzkdc'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
  {
    "_id": "202501",
    "id": 202501,
    "title": "Vettaiyaan",
    "overview":
      "A fearless cop from Tamil Nadu is transferred to Mumbai to lead an undercover mission against an international arms cartel. But when he discovers a link between his past and the syndicate, duty turns deeply personal.",
    "poster_path": "https://m.media-amazon.com/images/M/MV5BZmRkMDEwMTItZGM3Ny00MjhjLWJjZWEtN2Q4MmQzM2NmYmEzXkEyXkFqcGc@._V1_QL75_UX217.5_.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BZmRkMDEwMTItZGM3Ny00MjhjLWJjZWEtN2Q4MmQzM2NmYmEzXkEyXkFqcGc@._V1_QL75_UX217.5_.jpg",
    "genres": [
      { "id": 28, "name": "Action" },
      { "id": 53, "name": "Thriller" },
      { "id": 80, "name": "Crime" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-01-12",
    "original_language": "TAMIL",
    "tagline": "One man. One mission. One reckoning.",
    "vote_average": 7.8,
    "vote_count": 25400,
    "runtime": 155
  },
  {
    "_id": "202502",
    "id": 202502,
    "title": "Lokah Chapter 1: Chandra",
    "overview":
      "Chandra, a young woman, arrives in Bengaluru with a mission. Her neighbor, Sunny, sets out to unravel the mystery about her and they are on an unexpected adventure ride together.",
    "poster_path": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f2a9ff227838741.684823837003f.jpg",
    "backdrop_path": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f2a9ff227838741.684823837003f.jpg",
    "genres": [
      { "id": 878, "name": "SciFi" },
      { "id": 18, "name": "Fantasy" },
      { "id": 12, "name": "Adventure" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-02-21",
    "original_language": "MALAYALAM",
    "tagline": "India reaches for the stars, again.",
    "vote_average": 8.1,
    "vote_count": 18750,
    "runtime": 142
  },
  {
    "_id": "202503",
    "id": 202503,
    "title": "Kantara: A Legend Chapter-1",
    "overview":
      "Exploring the origins of Kaadubettu Shiva during the Kadamba dynasty era, it delves into the untamed wilderness and forgotten lore surrounding his past.",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/6/69/Kantara-_Chapter_1_poster.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/en/6/69/Kantara-_Chapter_1_poster.jpg",
    "genres": [
      { "id": 18, "name": "Action" },
      { "id": 9648, "name": "Thriller" },
      { "id": 10749, "name": "Mysterious" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-03-14",
    "original_language": "TELENGU",
    "tagline": "Every journey hides a story.",
    "vote_average": 9.8,
    "vote_count": 9600,
    "runtime": 128
  },
  {
    "_id": "202504",
    "id": 202504,
    "title": "Diés Iraé",
    "overview":
      "His search for the mystery draws him into unexpected worlds and alliances and the horrors that lie ahead.",
    "poster_path": "https://image.tmdb.org/t/p/original/rajdhaniexpress2025poster.jpg",
    "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9xss2wfbeS05m_JaFTrJ6sIXElrMh5PRhw&s",
    "genres": [
      { "id": 53, "name": "Thriller" },
      { "id": 9648, "name": "Horror" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-04-11",
    "original_language": "MALAYALAM",
    "tagline": "The journey is faster than the truth.",
    "vote_average": 7.2,
    "vote_count": 11450,
    "runtime": 119
  },
  {
    "_id": "202505",
    "id": 202505,
    "title": "Bison Kaalamaadan",
    "overview":
      "A young man fights to overcome violence plaguing his village while striving to succeed as a professional Kabaddi player.",
    "poster_path": "https://image.tmdb.org/t/p/original/projectraavan2025poster.jpg",
    "backdrop_path": "https://m.media-amazon.com/images/M/MV5BNzQxMjZmOTQtOGRhNC00YTdiLTgxYjMtZDgyNTNkMDg4ZWMzXkEyXkFqcGc@._V1_.jpg",
    "genres": [
      { "id": 878, "name": "Sports" },
      { "id": 28, "name": "Action" },
      { "id": 18, "name": "Drama" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-05-30",
    "original_language": "TAMIL",
    "tagline": "Evil is just another version of genius.",
    "vote_average": 8.0,
    "vote_count": 20300,
    "runtime": 161
  },
  {
    "_id": "202506",
    "id": 202506,
    "title": "King",
    "overview":
      "Mentor and disciple embark on a perilous journey, pushing their survival skills to the limit against overwhelming odds and unforgiving environments.",
    "poster_path": "https://image.tmdb.org/t/p/original/orukadhairukkum2025poster.jpg",
    "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9VN_YeSPwpVFPPGTi9v504-isvKA1c1ztg&s",
    "genres": [
      { "id": 9648, "name": "Action" },
      { "id": 27, "name": "Thriller" },
      { "id": 18, "name": "Drama" }
    ],
    "casts": dummyCastsData,
    "release_date": "2026-06-13",
    "original_language": "HINDI",
    "tagline": "The story you tell might tell you back.",
    "vote_average": 9.6,
    "vote_count": 8800,
    "runtime": 135
  },
  {
    "_id": "202507",
    "id": 202507,
    "title": "Deadpool & Wolverine",
    "overview":
      "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse.",
    "poster_path": "https://image.tmdb.org/t/p/original/royalheist2025poster.jpg",
    "backdrop_path": "https://lumiere-a.akamaihd.net/v1/images/image_9b066416.jpeg?region=0,0,540,810",
    "genres": [
      { "id": 28, "name": "Action" },
      { "id": 35, "name": "Comedy" },
      { "id": 80, "name": "Crime" }
    ],
    "casts": dummyCastsData,
    "release_date": "2025-07-18",
    "original_language": "ENGLISH",
    "tagline": "The greatest robbery of the century began with a lie.",
    "vote_average": 7.9,
    "vote_count": 17200,
    "runtime": 138
  }
];


export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 150,
        },
        "amount": 300,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[1],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 150,
        },
        "amount": 150,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[2],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 150,
        },
        "amount": 450,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]