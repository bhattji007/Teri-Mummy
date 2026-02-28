export type RoastJoke = {
  id: number;
  joke: string;
  punchline: string;
  damage: string;
  category: string;
  roast_level: string;
};

export const jokes: RoastJoke[] = [
  {
    id: 1,
    joke: "Teri mummy colony ka public Wi-Fi hai, sab connect hoke bhaag jaate.",
    punchline: "Password poocha to bola: default hi chal raha hai.",
    damage: "∞ izzat",
    category: "social",
    roast_level: "NUCLEAR"
  },
  {
    id: 2,
    joke: "Teri mummy ka attitude aisa, jaise free trial bhi premium ho.",
    punchline: "Lekin expiry date pe reminder khud aata hai.",
    damage: "9000+ ego",
    category: "attitude",
    roast_level: "HIGH"
  },
  {
    id: 3,
    joke: "Teri mummy ka logic WhatsApp forward se chal raha hai.",
    punchline: "Fact-check ka button dekhte hi app बंद कर देती hai.",
    damage: "420 IQ",
    category: "logic",
    roast_level: "HIGH"
  },
  {
    id: 4,
    joke: "Teri mummy ka secret itna common hai ki auto wala bhi jaanta hai.",
    punchline: "Route map pe 'popular destination' mein saved hai.",
    damage: "∞ gossip",
    category: "street",
    roast_level: "NUCLEAR"
  },
  {
    id: 5,
    joke: "Teri mummy ka plan A fail, plan B bhi neighbor ka nikla.",
    punchline: "Plan C pe pura mohalla co-founder hai.",
    damage: "760% chaos",
    category: "planning",
    roast_level: "HIGH"
  },
  {
    id: 6,
    joke: "Teri mummy ka confidence sale mein bhi MRP pe milta hai.",
    punchline: "Return policy: zero, overacting: unlimited.",
    damage: "MRP x 2",
    category: "confidence",
    roast_level: "HIGH"
  },
  {
    id: 7,
    joke: "Teri mummy ka network itna strong hai, tower khud call karta hai.",
    punchline: "Signal full, privacy null.",
    damage: "5G gossip",
    category: "network",
    roast_level: "NUCLEAR"
  },
  {
    id: 8,
    joke: "Teri mummy ka drama 4K mein stream hota hai bina subscription.",
    punchline: "Skip intro dabao to bhi recap aa jata hai.",
    damage: "ULTRA HD",
    category: "drama",
    roast_level: "NUCLEAR"
  },
  {
    id: 9,
    joke: "Teri mummy ka status daily update hota hai, facts kabhi nahi.",
    punchline: "Source: trust me bro, verified by aunty network.",
    damage: "fact -100",
    category: "status",
    roast_level: "HIGH"
  },
  {
    id: 10,
    joke: "Teri mummy ka comeback loading mein rehta hai, roast turant milta hai.",
    punchline: "Ping 999ms, attitude 1ms.",
    damage: "lag + burn",
    category: "comeback",
    roast_level: "HIGH"
  },
  {
    id: 11,
    joke: "Teri mummy ki timing itni late hai ki kal ka joke aaj samjha.",
    punchline: "Reaction tab aayi jab topic retire ho chuka tha.",
    damage: "late fee",
    category: "timing",
    roast_level: "MID"
  },
  {
    id: 12,
    joke: "Teri mummy ka fashion trend ko bhi confused kar deta hai.",
    punchline: "Runway ne bola: please use emergency exit.",
    damage: "style crash",
    category: "fashion",
    roast_level: "HIGH"
  },
  {
    id: 13,
    joke: "Teri mummy ka GPS seedha gali gossip pe reroute karta hai.",
    punchline: "Fastest route: kisi ki life update.",
    damage: "map hijack",
    category: "gossip",
    roast_level: "NUCLEAR"
  },
  {
    id: 14,
    joke: "Teri mummy ki battery 1% pe bhi bakbak 100% chalti hai.",
    punchline: "Power saving mode bhi resign de deta hai.",
    damage: "talktime ∞",
    category: "energy",
    roast_level: "HIGH"
  },
  {
    id: 15,
    joke: "Teri mummy ka filter off ho to bhi overconfidence HD rehta hai.",
    punchline: "Camera ne bola: meri galti nahi hai.",
    damage: "HD delusion",
    category: "filter",
    roast_level: "HIGH"
  },
  {
    id: 16,
    joke: "Teri mummy ka sense of humor buffering mein hi khatam ho gaya.",
    punchline: "Play dabaya aur app crash ho gaya.",
    damage: "humor 404",
    category: "humor",
    roast_level: "MID"
  },
  {
    id: 17,
    joke: "Teri mummy ka budget joke pe bhi EMI chala deta hai.",
    punchline: "Down payment mein sirf excuse diya.",
    damage: "EMI mode",
    category: "money",
    roast_level: "HIGH"
  },
  {
    id: 18,
    joke: "Teri mummy ka swag copy-paste hai, source ab tak unknown.",
    punchline: "Original file corrupted nikli.",
    damage: "copy strike",
    category: "swag",
    roast_level: "HIGH"
  },
  {
    id: 19,
    joke: "Teri mummy ka mic on rehta hai, mute ka option missing.",
    punchline: "Meeting khatam, commentary continue.",
    damage: "audio spam",
    category: "voice",
    roast_level: "NUCLEAR"
  },
  {
    id: 20,
    joke: "Teri mummy ka CV: full-time overreaction, part-time logic skip.",
    punchline: "Experience section mein bas caps-lock likha hai.",
    damage: "HR panic",
    category: "career",
    roast_level: "HIGH"
  }
];

export function getRandomJoke(exceptId?: number): RoastJoke {
  const pool = exceptId ? jokes.filter((joke) => joke.id !== exceptId) : jokes;
  return pool[Math.floor(Math.random() * pool.length)];
}
