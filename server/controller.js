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
      "Be a content creator!",
      "Create the next big social media app!!!",
      "Go to the gym asap:)",
      "Dream big!",
      "Dream bigger!!!",
      "Get a new credit card",
    ];

    // choose random inspiration
    let inspirationIndex = Math.floor(Math.random() * inspiration.length);
    let randomInspiration = inspiration[inspirationIndex];

    res.status(200).send(randomInspiration);
  },
};

// git add .
// git commit -m "message"
// copy and paste second box on github*
