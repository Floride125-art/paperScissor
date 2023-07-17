var btn = document.querySelectorAll(".btn");
var user_score_count = 0;
var cpu_score_count = 0;
Array.from(btn).forEach((e) => {
  e.addEventListener("click", (e) => {
    document.querySelector(".player-1").innerHTML = e.target.getAttribute(
      "data-value"
    );
    var num = Math.floor(Math.random() * 3);
    if (num == 0) {
      document.querySelector(".cpu").innerHTML = "🪨";
    }
    if (num == 1) {
      document.querySelector(".cpu").innerHTML = "📄";
    }
    if (num == 2) {
      document.querySelector(".cpu").innerHTML = "✂️";
    }
    if (
      document.querySelector(".player-1").innerHTML == "🪨" &&
      document.querySelector(".cpu").innerHTML == "✂️"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✂️" &&
      document.querySelector(".cpu").innerHTML == "🪨"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "🪨" &&
      document.querySelector(".cpu").innerHTML == "📄"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "📄" &&
      document.querySelector(".cpu").innerHTML == "🪨"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "📄" &&
      document.querySelector(".cpu").innerHTML == "✂️"
    ) {
      cpu_score_count = cpu_score_count + 1;
      document.querySelector(".cpu-score").innerHTML = cpu_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML == "✂️" &&
      document.querySelector(".cpu").innerHTML == "📄"
    ) {
      user_score_count = user_score_count + 1;
      document.querySelector(".player-score").innerHTML = user_score_count;
    }
    if (
      document.querySelector(".player-1").innerHTML ==
      document.querySelector(".cpu").innerHTML
    ) {
      alert("draw");
    }
  });
});