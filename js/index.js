let result = {
  tag: "",
  free: true,
  role: false,
  user: "Hello World",
  email: "helloworld@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

/* You need to work in this part */
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked!");
  let key = "ema_live_YZ7NmsWvciaRm5Hp5vc0dik9ajDhzju7HIe0rUps";
  let email = document.getElementById("username").value;

  resultCont.innerHTML = `<img width="40" src="image/Cube@1x-1.0s-200px-200px.svg" alt="Loading...">`;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  try {
      let res = await fetch(url);
      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }
      let result = await res.json();
      let str = ``;

      for (let key of Object.keys(result)) {
          str += `<div>${key}: ${result[key]}</div>`;
      }

      console.log(str);
      resultCont.innerHTML = str;
  } catch (error) {
      console.error('Fetch error:', error);
      resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
  }
});