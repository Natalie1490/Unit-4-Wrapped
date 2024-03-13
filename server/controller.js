module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "All your hard work will soon pay off.",
      "Allow compassion to guide your decisions.",
      "An acquaintance of the past will affect you in the near future.",
      "An agreeable romance might begin to take on the appearance.",
      "An important person will offer you support.",
      "An inch of time is an inch of gold.",
    ];

    // choose random fortune
    let fortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[fortuneIndex];

    res.status(200).send(randomFortune);
  },

  getInspiration: (req, res) => {
    const inspiration = [
      "Be yourself!",
      "You will do on to do great things!!!",
      "Go to the gym!",
      "Just do it!",
      "Dream bigger!!!",
      "Get a new credit card!",
    ];

    // choose random inspiration
    let inspirationIndex = Math.floor(Math.random() * inspiration.length);
    let randomInspiration = inspiration[inspirationIndex];

    res.status(200).send(randomInspiration);
  },

  getEncouragement: (req, res) => {
    const encouragement = [
      "Be the best you!",
      "You're doing great",
      "You will be sucessful",
      "Dream big!",
      "You can do it!",
      "You got this dude!",
    ];

    // choose random encouragement
    let encouragementIndex = Math.floor(Math.random() * encouragement.length);
    let randomEncouragement = encouragement[encouragementIndex];

    res.status(200).send(randomEncouragement);
  },

  getHelp: (req, res) => {
    const help = [
      "Google is your friend!",
      "Books have all of the knowledge you desire!",
      "The internet is your greatest asset!",
      "Financial literacy in needed to get the most life can offer!",
      "Chat GPT was made for a reason!",
      "Read a book!",
    ];

    // choose random help
    let helpIndex = Math.floor(Math.random() * help.length);
    let randomHelp = help[helpIndex];

    res.status(200).send(randomHelp);
  },
};
