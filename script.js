const atomBtn = document.getElementById("atomBtn");
const get = document.getElementById("get");
const create = document.getElementById("create");
const update = document.getElementById("update");
const stopBtn = document.getElementById("stopBtn");

let interval = null;
let count = 0;
let showCount = 0;

atomBtn.addEventListener("click", () => {
  let check = "Ciddisən ?";
  if (confirm(check) == false) {
    console.log("Salam");
    text = "You pressed OK!";
    return;
  }

  // interval = setInterval(function () {
  //   fetch("https://v2.jokeapi.dev/submit", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       formatVersion: 3,
  //       category: "Misc",
  //       type: "single",
  //       joke: "A horse walks into a bar...",
  //       flags: {
  //         nsfw: true,
  //         religious: false,
  //         political: true,
  //         racist: false,
  //         sexist: false,
  //         explicit: false,
  //       },
  //       lang: "en",
  //     }),
  //   })
  //     .then(function (res) {
  //       console.log(++count);
  //     })
  //     .catch(function () {
  //       console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  //     });
  // }, 500);

  while (true) {
    fetch("https://v2.jokeapi.dev/submit", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        formatVersion: 3,
        category: "Misc",
        type: "single",
        joke: "A horse walks into a bar...",
        flags: {
          nsfw: true,
          religious: false,
          political: true,
          racist: false,
          sexist: false,
          explicit: false,
        },
        lang: "en",
      }),
    })
      .then(function (res) {
        if (count == showCount) {
          showCount = showCount + 500;
          console.log(count);
        }
        console.log(++count);
      })
      .catch(function () {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      });
  }

  //   fetch(`https://v2.jokeapi.dev/joke/Any`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
});

stopBtn.addEventListener("click", () => {
  console.log("salam");
  clearInterval(interval);
});

get.addEventListener("click", () => {
  fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${222}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

create.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/submit", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      formatVersion: 3,
      category: "Misc",
      type: "single",
      joke: "A horse walks into a bar...",
      flags: {
        nsfw: true,
        religious: false,
        political: true,
        racist: false,
        sexist: false,
        explicit: false,
      },
      lang: "en",
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
});

update.addEventListener("click", () => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ setup: "Fetch PUT Request Example" }),
  };
  fetch("https://v2.jokeapi.dev/joke/Any?idRange=222", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
