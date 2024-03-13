const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener("click", getFortune);

const inspoBtn = document.getElementById("inspoButton");

const getInspiration = () => {
  axios.get("http://localhost:4000/api/inspiration/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

inspoBtn.addEventListener("click", getInspiration);

const encouragementBtn = document.getElementById("encouragementButton");

const getEncouragement = () => {
  axios.get("http://localhost:4000/api/encouragement/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

encouragementBtn.addEventListener("click", getEncouragement);

const helpBtn = document.getElementById("helpButton");

const getHelp = () => {
  axios.get("http://localhost:4000/api/help/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

helpBtn.addEventListener("click", getHelp);
