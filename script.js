let $ = document;

let wrapperEl = $.querySelector(".wrapper");
let toastEl = $.querySelector(".toast");
let toastTitleEl = $.querySelector(".toast .title");
let toastDescEl = $.querySelector(".toast .desc");
let icon = $.querySelector(".toast .icon");
let closeIcon = $.querySelector(".toast .close-icon");

window.addEventListener("load", () => {
  function checkInternetStatus() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        console.log("respones : ", res.status);
        if (res.status !== 200) {
          internetOffline();
        } else {
            internetOnline()
        }
      })
      .catch((err) => {
        console.log("error : ", err);
        internetOffline()
      });
  }
  function internetOnline() {
    toastEl.classList.remove("offline");
    toastTitleEl.innerHTML = "You're online now";
    toastDescEl.innerHTML = "Hurray! Internet is connected.";
    icon.innerHTML = `<i class="uil uil-wifi"></i>`;
    closeIcon.addEventListener("click", () => {
      wrapperEl.classList.add("hide");
    });
    setTimeout(() => {
      wrapperEl.classList.add("hide");
    }, 5000);
  }
  function internetOffline() {
    wrapperEl.classList.remove("hide");
    toastEl.classList.add("offline");
    toastTitleEl.innerHTML = "You're offline now";
    toastDescEl.innerHTML = "oops! Internet is disconnected.";
    icon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
    closeIcon.addEventListener("click", () => {
      wrapperEl.classList.add("hide");
    });
  }
    setInterval(()=>{
        checkInternetStatus()
    }, 500);
});
// fix on firefox
