let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  const datePerser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-TN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    });
    return newDate;
  };

  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestemp = Date.parse(date);

    return Math.ceil(todayTimestamp - timestemp / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) => `
      <div class="card">
      <img src='${user.picture.large}' alt='photo de ${user.name.last}'>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${datePerser(user.dob.date)}</p>
        <em>Membre depuis ${dayCalc(user.registered.date)} jours</em>
      </div>
    `
    )
    .join("");
};

userDisplay();
