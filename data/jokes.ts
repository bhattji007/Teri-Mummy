export type Joke = {
  id: number;
  line: string;
};

export const jokes: Joke[] = [
  { id: 1, line: "Teri mummy colony ka public Wi-Fi hai, sab connect hoke bhaag jaate." },
  { id: 2, line: "Teri mummy ka attitude aisa, jaise free trial bhi premium ho." },
  { id: 3, line: "Teri mummy ka logic WhatsApp forward se chal raha hai." },
  { id: 4, line: "Teri mummy ka secret itna common hai ki auto wala bhi jaanta hai." },
  { id: 5, line: "Teri mummy ka plan A fail, plan B bhi neighbor ka nikla." },
  { id: 6, line: "Teri mummy ka confidence sale mein bhi MRP pe milta hai." },
  { id: 7, line: "Teri mummy ka network itna strong hai, tower khud call karta hai." },
  { id: 8, line: "Teri mummy ka drama 4K mein stream hota hai bina subscription." },
  { id: 9, line: "Teri mummy ka status daily update hota hai, facts kabhi nahi." },
  { id: 10, line: "Teri mummy ka comeback loading mein rehta hai, roast turant milta hai." },
  { id: 11, line: "Teri mummy ki timing itni late hai ki kal ka joke aaj samjha." },
  { id: 12, line: "Teri mummy ka fashion trend ko bhi confused kar deta hai." },
  { id: 13, line: "Teri mummy ka GPS seedha gali gossip pe reroute karta hai." },
  { id: 14, line: "Teri mummy ki battery 1% pe bhi bakbak 100% chalti hai." },
  { id: 15, line: "Teri mummy ka filter off ho to bhi overconfidence HD rehta hai." },
  { id: 16, line: "Teri mummy ka sense of humor buffering mein hi khatam ho gaya." },
  { id: 17, line: "Teri mummy ka budget joke pe bhi EMI chala deta hai." },
  { id: 18, line: "Teri mummy ka swag copy-paste hai, source ab tak unknown." },
  { id: 19, line: "Teri mummy ka mic on rehta hai, mute ka option missing." },
  { id: 20, line: "Teri mummy ka CV: full-time overreaction, part-time logic skip." }
];

export function getRandomJoke(exceptId?: number): Joke {
  const pool = exceptId ? jokes.filter((joke) => joke.id !== exceptId) : jokes;
  return pool[Math.floor(Math.random() * pool.length)];
}
