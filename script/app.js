window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  const marker1 = document.getElementById("marker1");
  const marker2 = document.getElementById("marker2");
  const marker3 = document.getElementById("marker3");
  const marker4 = document.getElementById("marker4");
  const marker7 = document.getElementById("marker7");
  const marker6 = document.getElementById("marker6");
  const marker5 = document.getElementById("marker5");
  const car = document.getElementById("car3d");
  const divOverlay = document.getElementById("div-overlay");
  const ar_Cerebro = document.getElementById("ar_Cerebro");
  const ar_Creatividad = document.getElementById("ar_Creatividad");
  const assetsContainer = document.getElementById("assets-container");
  const video1 = document.getElementById("video");
  const video_game = document.getElementById("video_game");
  const video2 = document.getElementById("video_stem");
  const humo = document.getElementById("ar-humo");
  const mariposa1 = document.getElementById("arte_i");
  const arte_libelula = document.getElementById("arte_libelula");
  const mariposas = document.getElementById("arte_mariposas");
  let humoAnime = false;
  let animeteArte = false;
  let animeteCerebro = false;
  let animateCreatividad = false;
  const delay = 50; // Tiempo en milisegundos entre cada cambio de imagen
  let lastTimestamp = 0; // Marca de tiempo del último cambio de imagen
  //console.dir(car);
  let num = 0;
  let numLibelula = 0;
  let numMariposas = 0;

  for (let i = 1; i <= 28; i++) {
    const img = document.createElement("img");
    const imgId = `Creatividad${i}`;
    img.id = imgId;
    img.src = `../photos/van_gogh/van_goh_40ms_${i}.png`;
    assetsContainer.appendChild(img);
  }

  for (let i = 1; i <= 75; i++) {
    const img = document.createElement("img");
    const imgId = `libelula${i}`;
    img.id = imgId;
    img.src = `../photos/arte/libelula/libelula_70ms_${i}.png`;
    assetsContainer.appendChild(img);
  }
  for (let i = 1; i <= 166; i++) {
    const img = document.createElement("img");
    const imgId = `mariposas${i}`;
    img.id = imgId;
    img.src = `../photos/arte/mariposas/mariposas_40ms_${i}.png`;
    assetsContainer.appendChild(img);
  }
  for (let i = 1; i <= 38; i++) {
    const img = document.createElement("img");
    const imgId = `Cerebro${i}`;
    img.id = imgId;
    img.src = `../photos/cerebro/creatures-12020_20ms_${i}.png`;
    assetsContainer.appendChild(img);
  }
  let anime_cerebro = 0;
  let anime_creatividad = 0;
  //
  function animate(timestamp) {
    if (animateCreatividad) {
      if (timestamp - lastTimestamp >= delay) {
        if (anime_creatividad > 27) anime_creatividad = 0;
        anime_creatividad++;
        ar_Creatividad.setAttribute("src", `#Creatividad${anime_creatividad}`);
        lastTimestamp = timestamp;
      }
      requestAnimationFrame(animate);
    }
    if (humoAnime) {
      if (timestamp - lastTimestamp >= delay) {
        num++;
        humo.setAttribute("src", `#ig-humo${num}`);
        if (num == 5) num = 0;
        lastTimestamp = timestamp;
      }
      requestAnimationFrame(animate);
    }
    if (animeteArte) {
      if (timestamp - lastTimestamp >= delay) {
        if (num > 6) num = 0;
        if (numLibelula > 54) numLibelula = 0;
        if (numMariposas > 165) numMariposas = 0;
        num++;
        numLibelula++;
        numMariposas++;
        mariposa1.setAttribute("src", `#mariposa1_${num}`);
        arte_libelula.setAttribute("src", `#libelula${numLibelula}`);
        mariposas.setAttribute("src", `#mariposas${numMariposas}`);
        lastTimestamp = timestamp;
      }
      requestAnimationFrame(animate);
    }
    if (animeteCerebro) {
      if (timestamp - lastTimestamp >= delay) {
        if (anime_cerebro > 37) anime_cerebro = 0;
        anime_cerebro++;
        ar_Cerebro.setAttribute("src", `#Cerebro${anime_cerebro}`);
      }
      requestAnimationFrame(animate);
    }
  }
  marker1.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    video1.play();
  });

  marker1.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    video1.pause();
  });

  marker7.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    video_game.play();
  });

  marker7.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    video_game.pause();
  });

  marker2.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    video2.play();
  });

  marker2.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    video2.pause();
  });
  marker3.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    console.log(humo);
    humo.setAttribute("src", "#ig-humo2");
    console.log(humo);
    humoAnime = true;
    animate();
  });

  marker3.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    humoAnime = false;
  });

  marker4.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";

    mariposa1.setAttribute("src", "#mariposa1_1");
    animeteArte = true;
    animate();
  });

  marker4.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    animeteArte = false;
  });

  marker6.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    animeteCerebro = true;
    animate();
  });

  marker6.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    animeteCerebro = false;
  });

  marker5.addEventListener("markerFound", function () {
    divOverlay.style.visibility = "hidden";
    animateCreatividad = true;
    animate();
  });

  marker5.addEventListener("markerLost", function () {
    divOverlay.style.visibility = "visible";
    animateCreatividad = false;
  });
}
