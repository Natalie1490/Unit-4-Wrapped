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
