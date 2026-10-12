
"use client";


import { useState, useEffect, useRef } from "react";

import styles from "./page.module.css";

export default function Page() {
  const [slide, setSlide] = useState(1);


  // Birthday background music
 const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/songs/worlds_best_bgm.mp3");

    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try to start music when the website opens
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Browser may block automatic playback
        setIsPlaying(false);
      });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Play or pause the birthday song
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Could not play birthday music:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };


  const nextSlide = () => {
    if (slide < 4) {
      setSlide(slide + 1);
    }
  };

  const previousSlide = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    }
  };

  // Friend's photos
  const photos = [
    "/photos/friend1.jpg",
    "/photos/friend2.jpg",
    "/photos/friend3.jpg",
    "/photos/friend4.jpg",
    "/photos/friend5.jpg",
    "/photos/friend6.jpg",
    "/photos/friend7.jpg",
    "/photos/friend8.jpg",
    "/photos/friend9.jpg",
    "/photos/friend10.jpg",
    "/photos/friend11.jpg",
  
   
   
  ];

  // Messages displayed one by one
  const messages = [
    " Back then, we used to take pictures just for fun, tease each other with the weirdest filters, and laugh at",
    " the silliest things. 😂❤️ We never realized that those little moments would become some of our most",
    " precious memories. The laughter, the silly fights, the teasing, and all the crazy things we did together ",
    " made those days so special. 🥹💗 We didn't know it then, but those were the golden days—the moments ",
    " we would look back on someday with the biggest smiles and the softest hearts.",
  ];

  
const [photoIndex, setPhotoIndex] = useState(0);
const [showAllPhotos, setShowAllPhotos] = useState(false);
const [showMessages, setShowMessages] = useState(false);
const [messageLine, setMessageLine] = useState(0);

// Show each photo for 4 seconds, without repeating
useEffect(() => {
  if (slide !== 3) return;

  setPhotoIndex(0);
  setShowAllPhotos(false);
  setShowMessages(false);
  setMessageLine(0);

  let currentIndex = 0;

  const photoTimer = setInterval(() => {
    if (currentIndex < photos.length - 1) {
      currentIndex += 1;
      setPhotoIndex(currentIndex);
    } else {
      clearInterval(photoTimer);
      setShowAllPhotos(true);
      setShowMessages(true);
    }
  }, 4000);

  return () => clearInterval(photoTimer);
}, [slide]);

// Display messages only after all photos have appeared
useEffect(() => {
  if (slide !== 3 || !showMessages) return;

  const messageTimer = setInterval(() => {
    setMessageLine((prev) =>
      prev < messages.length ? prev + 1 : prev
    );
  }, 1200);

  return () => clearInterval(messageTimer);
}, [slide, showMessages]);
return (
  <main className={`${styles.container} ${styles[`slide${slide}`]}`}>

    
    {/* Birthday Music Button */}
    <button
      onClick={toggleMusic}
      className="fixed right-4 top-4 z-[100] rounded-full border border-white/40 bg-purple-900/80 px-4 py-3 font-bold text-white shadow-lg backdrop-blur-md transition hover:scale-105"
      aria-label={isPlaying ? "Pause birthday music" : "Play birthday music"}
    >
      {isPlaying ? "🎵 Pause ⏸️" : "🎂 Play ▶️"}
    </button>

{/* =========================
    SLIDE 1 - LUXURY SURPRISE
========================= */}

{slide === 1 && (
  <section className='flex  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 min-h-screen flex-col '>

    {/* Main Wishes Container */}
    <div className={styles.wishesBox}>

      <h1 className='font-extrabold text-center text-3xl text-white mb-3 px-4 p-4 align-center rounded-lg center'>
        ❤️Happy Birthday🧸 
      </h1>

<div className="
  w-full
  max-w-5xl
  min-h-0
  mx-auto
  p-4
  md:p-6
  rounded-3xl
  bg-gradient-to-br
  from-white
  via-yellow-50
  to-gray-100
  border-2
  border-yellow-500
  shadow-[0_0_50px_rgba(234,179,8,0.35)]
  flex
  flex-col
  items-center
  justify-center
  text-center
">
<p className="
    text-2xl
    md:text-3xl
    font-semibold
    italic
    leading-relaxed
    text-gray-800
  ">
     Today is not just another day... ✨
    <br />
   
  </p>
   <p className="
    mt-8
    text-xl
    md:text-2xl
    font-medium
    leading-loose
    text-gray-700
  ">
    May your days be brighter, your worries smaller, and your dreams bigger! 🌈
    <br />
   I wish you a life full of smiles, endless love,
    beautiful memories, and dreams coming true. 
    Stay cute, stay crazy, and keep shining forever! 🫶🎂
    <br />
     You are the main character of your life, so keep shining like a star! 🌟💗

May your story be filled with beautiful moments and a happy ending! 🫶💞
  </p>
    <p className="
    mt-3
    text-xl
    md:text-2xl
    font-semibold
    italic
    leading-relaxed
    text-gray-800
  ">
    May your birthday be filled with
    <br />
    happiness, love and beautiful memories. 💖
    <br/>
    🎀 Saengil Chukahae..🫰🏻
  </p>
      </div>
      <div className="flex justify-center mt-8">
 <button
    onClick={nextSlide}
    className="
    
      px-8
      py-4
      rounded-full
      mx-auto
      bg-gradient-to-r
      from-yellow-400
      via-yellow-500
      to-yellow-600
      text-gray-900
      text-lg
      font-bold
      shadow-[0_0_30px_rgba(234,179,8,0.45)]
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_0_45px_rgba(234,179,8,0.7)]
      active:scale-95
      cursor-pointer
    ">
    Open Your Surprise 🎁
  </button>
  </div>

    </div>

  </section>
)}

    {/* =========================
    SLIDE 2 - KRISHNA THEME
========================= */}
{slide === 2 && (
  <section
    className="
      relative
      min-h-screen
      w-full
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      bg-gradient-to-br
      from-[#050816]
      via-[#11105c]
      to-[#2b1055]
      text-white
    "
  >
    {/* ✨ Background Stars */}
    <div className="absolute inset-0 pointer-events-none">
      <span className="absolute top-[10%] left-[12%] text-yellow-300 text-3xl animate-pulse">
        ✦
      </span>
      <span className="absolute top-[20%] right-[15%] text-yellow-200 text-2xl animate-pulse">
        ✨
      </span>
      <span className="absolute top-[45%] left-[8%] text-blue-200 text-2xl animate-pulse">
        ✧
      </span>
      <span className="absolute bottom-[20%] right-[10%] text-yellow-300 text-3xl animate-pulse">
        ★
      </span>
      <span className="absolute bottom-[15%] left-[20%] text-purple-200 text-2xl animate-pulse">
        ✦
      </span>
    </div>
    {/* 🌙 Moon Glow */}
    <div
      className="
        absolute
        top-10
        right-10
        w-32
        h-32
        rounded-full
        bg-yellow-200/20
        blur-2xl
      "
    ></div>
    {/* 🪈 Krishna Flute Decoration */}

    {/* Main Krishna Message Box */}
   <div
  className="
    relative
    z-10
    w-[90%]
    max-w-4xl
    min-h-[200px]
    p-5
    md:p-8
    rounded-3xl
    bg-black/40
    backdrop-blur-md
    border
    border-yellow-400/50
    shadow-[0_0_60px_rgba(234,179,8,0.20)]
    flex
    flex-col
    items-center
    justify-center
  "
>
      {/* Krishna Symbol */}
      <div
        className="
          text-5xl
          md:text-5xl
          mb-5
          animate-pulse
          drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]
        "
      >
        🪈🦚🪈
      </div>
      {/* Heading */}
      <h2
        className="
          text-2xl
          md:text-4xl
          font-serif
          font-bold
          text-yellow-300
          tracking-wide
          drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]
        "
      >
        A Blessing from Krishna
      </h2>

      {/* Decorative Line */}
      {/* <div
        className="
          w-32
          h-[2px]
          my-6
          bg-gradient-to-r
          from-transparent
          via-yellow-400
          to-transparent
        "
      ></div> */}
      {/* Emotional Text */}
      <p
        className="
          max-w-2xl
          text-lg
          md:text-xl
          leading-loose
          text-blue-50
          font-medium
        "
      >
        When life feels uncertain,
        <br />
        remember that Krishna is always there
        <br />
        to guide your heart and protect your path. 🦚
      </p>

      <p
        className="
          max-w-2xl
          mt-5
          text-lg
          md:text-xl
          leading-relaxed
          text-gray-200
          italic
        "
      >
        May Krishna fill your life with peace,
        <br />
        courage, love and endless happiness.
        <br />
        May every difficult path become
        <br />
        a beautiful journey. ✨<br />
        May your life be as beautiful as Vrindavan and your heart as peaceful as my flute's melody. 🎶🦚
      </p>


      {/* Krishna Quote */}
      <p
        className="
          mt-8
          text-xl
          md:text-2xl
          font-serif
          font-semibold
          text-yellow-200
        "
      >
        "Where there is faith, there is always a way." ❤️
      </p>


      {/* Bottom Button */}
      <div className="flex justify-center mt-10">

        <button
          onClick={nextSlide}
          className="
            px-10
            py-3
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            via-yellow-500
            to-orange-500
            text-gray-900
            text-lg
            font-bold
            shadow-[0_0_30px_rgba(234,179,8,0.45)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_0_50px_rgba(234,179,8,0.7)]
            active:scale-95
            cursor-pointer
          "
        >
          Continue Your Journey ✨
        </button>
      </div>
    </div>
  </section>
)}

     {/* =========================
    SLIDE 3 - PHOTO MEMORIES
========================= */}


{slide === 3 && (
  <section className="relative flex h-screen w-full flex-col items-center overflow-hidden bg-gradient-to-br from-pink-950 via-purple-950 to-black px-3 py-3 text-center text-white">

    {/* Heading */}
    <h1 className="mb-2 shrink-0 text-2xl font-bold text-yellow-300 md:text-4xl">
      Beautiful Memories ❤️
    </h1>

    {/* Main photo area */}
    <div className="relative min-h-0 w-full max-w-5xl flex-1 overflow-hidden rounded-2xl border-4 border-yellow-300 bg-black shadow-2xl">

      {/* Display one photo at a time */}
      {!showAllPhotos ? (
        <img
          key={photoIndex}
          src={photos[photoIndex]}
          alt={`Birthday memory ${photoIndex + 1}`}
          className="h-full w-full object-contain"
          style={{
            animation: "birthdaySlideIn 0.7s ease-out",
          }}
        />
      ) : (
        /* Display all 10 photos together */
        <div className="grid h-full w-full grid-cols-5 grid-rows-2 gap-1 p-1">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className="min-h-0 min-w-0 overflow-hidden rounded-md"
            >
              <img
                src={photo}
                alt={`Birthday memory ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {/* Messages appear after all 10 photos */}
      {showMessages && (
        <div className="absolute inset-x-0 bottom-0 max-h-[45%] overflow-y-auto bg-black/70 py-2 md:px-5 md:py-3">
          {messages.slice(0, messageLine).map((message, index) => (
            <p
              key={index}
              className="mb-1 text-xs font-semibold text-white md:text-base"
            >
              {message}
            </p>
          ))}
        </div>
      )}
    </div>

    {/* Button remains visible */}
    <div className="flex w-full shrink-0 justify-center py-3">
      <button
        onClick={nextSlide}
        className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-purple-950 shadow-lg transition hover:scale-105 md:px-10"
      >
        One More Surprise 🎁
      </button>
    </div>

  </section>
)}
      {/* =========================
          SLIDE 4
      ========================= */}
   
{/* SLIDE 4 - LORD VENKATESWARA BLESSINGS */}

{slide === 4 && (
  <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-950 px-4 py-10 text-center text-white">

    {/* Decorative golden lights */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute left-[10%] top-[12%] animate-pulse text-3xl text-yellow-300">✦</span>
      <span className="absolute right-[12%] top-[18%] animate-pulse text-4xl text-yellow-400">✧</span>
      <span className="absolute left-[18%] bottom-[20%] animate-pulse text-3xl text-yellow-300">✦</span>
      <span className="absolute right-[15%] bottom-[15%] animate-pulse text-3xl text-yellow-300">✧</span>
     <span className="absolute left-[35%] bottom-[10%] animate-pulse text-3xl text-yellow-300">✴</span>
     <span className="absolute right-[45%] top-[8%] animate-pulse text-2xl text-yellow-200">⋆</span>
      <span className="absolute left-[5%] top-[55%] animate-pulse text-2xl text-yellow-400">✩</span>
      <span className="absolute left-[23%] bottom-[20%] animate-pulse text-3xl text-yellow-300">✦</span>
    </div>

    {/* Red and gold decorative borders */}
    <div className="absolute inset-3 rounded-3xl border-2 border-yellow-400/70 md:inset-6" />
    <div className="absolute inset-5 rounded-3xl border border-red-400/60 md:inset-8" />

    {/* Main content */}
<div className="relative z-10 mx-auto w-full max-w-5xl rounded-3xl border-2 border-yellow-400 bg-green-950/80 px-6 py-4 shadow-2xl md:px-10 md:py-6">

      {/* Lord Venkateswara-inspired sacred symbol */}
      <div className="mb-3 flex justify-center">
        <div className="relative flex h-16 w-12 items-center justify-center">
          <div className="absolute h-14 w-9 rounded-b-full border-x-4 border-white" />
          <div className="absolute top-3 h-9 w-2 rounded-full bg-red-500" />
        </div>
      </div>

      <h2 className=" font-serif text-2xl font-bold leading-tight text-yellow-300 drop-shadow-lg md:text-5xl">
        Divine Birthday Blessings
      </h2>

      <div className="mb-4 flex items-center justify-center gap-4 text-red-400">
        <span>✦</span>
        <span className="text-2xl text-yellow-300">❋</span>
        <span>✦</span>
      </div>

      <div className="space-y-1 text-lg leading-tight text-white md:text-2xl">
        {/* <p>May Lord Venkateswara bless you with happiness. ❤️</p> */}
        <p>“On your birthday, God has called you closer to Him to celebrate your special day with Him. May He bless you in every way and always stay by your side. 🙏❤️” ✨</p>
        <p>May all your dreams come true, may your smile never fade, and may you always be surrounded by love and blessings. 🌼</p>
        <p>May divine blessings always be with you. 🙏</p>
      </div>

      <h2 className="mt-6 font-serif text-2xl font-bold text-red-400 md:text-4xl">
        Happy Birthday! 🎂
      </h2>

      <p className="mt-4 text-lg font-semibold tracking-wide text-yellow-200">
        Om Namo Venkatesaya
      </p>

      {/* Centered button */}
      <div className="mt-5 flex justify-center">
        <button
          onClick={() => setSlide(1)}
          className="rounded-full border-2 border-yellow-300 bg-red-600 px-8 py-4 font-bold text-yellow-100 shadow-lg transition duration-300 hover:scale-105 hover:bg-red-700 active:scale-95"
        >
          Start Again ❤️
        </button>
      </div>
    </div>
  </section>
)}

      {/* =========================
          BACK BUTTON + DOTS
      ========================= */}
      <div className={styles.navigation}>

        {slide > 1 && (
          <button
            onClick={previousSlide}
            className={styles.backButton}
          >
            ← Back
          </button>
        )}

        <div className={styles.dots}>

          {[1, 2, 3, 4].map((number) => (
            <span
              key={number}
              className={`${styles.dot} ${
                slide === number ? styles.activeDot : ""
              }`}
            />
          ))}

        </div>

      </div>

    </main>

  );
}

