$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

let valuedisplays = document.querySelectorAll(".num");
let interval = 4000;

valuedisplays.forEach((valuedisplays) => {
  let startvalue = 0;
  let endvalue = parseInt(valuedisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  let counter = setInterval(function () {
    startvalue += 1;
    valuedisplays.textContent = startvalue;
    if (startvalue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});
