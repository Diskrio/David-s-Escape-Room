var v1 = 0;

function showModal1() {
  document.getElementById("myModal1").style.display = "flex";
  document.getElementById("backAmbience").pause();
}
function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
  document.getElementById("BASEBALLMUSIC").play();
  document.getElementById("backAmbience").pause();
}
function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
}
function showModal4() {
  document.getElementById("myModal4").style.display = "flex";
  document.getElementById("ZombieMusic").play();
  document.getElementById("backAmbience").pause();
}
function showModal5() {
  document.getElementById("myModal5").style.display = "flex";
}
function showModal6() {
  document.getElementById("myModal6").style.display = "flex";
  document.getElementById("PJZSCARE").play();
  document.getElementById("backAmbience").pause();
}
function showModal7() {
  document.getElementById("myModal7").style.display = "flex";
}
function showmapModal() {
  document.getElementById("mapmodal").style.display = "flex";
}

function hideModal1() {
  document.getElementById("myModal1").style.display = "none";
  document.getElementById("backAmbience").play();
}
function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("BASEBALLMUSIC").pause();
  document.getElementById("BASEBALLMUSIC").currentTime = 0;
  document.getElementById("backAmbience").play();
}
function hideModal3() {
  document.getElementById("myModal3").style.display = "none";
}
function hideModal4() {
  document.getElementById("myModal4").style.display = "none";
  document.getElementById("ZombieMusic").pause();
  document.getElementById("ZombieMusic").currentTime = 0;
  document.getElementById("backAmbience").play();
}
function hideModal5() {
  document.getElementById("myModal5").style.display = "none";
}
function hideModal6() {
  document.getElementById("myModal6").style.display = "none";
  document.getElementById("PJZSCARE").pause();
  document.getElementById("PJZSCARE").currentTime = 0;
  document.getElementById("RadioError").pause();
  document.getElementById("backAmbience").play();
}
function hideModal7() {
  document.getElementById("myModal7").style.display = "none";
}
function hidemapModal() {
  document.getElementById("mapmodal").style.display = "none";
}
function Petew() {
  document.getElementById("playbox").src = "images/petew.png";
  document.getElementById("playbox").setAttribute("onclick", "peteva()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function danter() {
  document.getElementById("playbox").src = "images/danter.png";
  document.getElementById("playbox").setAttribute("onclick", "danteva()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function kieshap() {
  document.getElementById("playbox").src = "images/kieshap.png";
  document.getElementById("playbox").setAttribute("onclick", "kieshava()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function mikeyt() {
  document.getElementById("playbox").src = "images/mikeyt.png";
  document.getElementById("playbox").setAttribute("onclick", "mikeyva()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function tonyd() {
  document.getElementById("playbox").src = "images/tonyd.png";
  document.getElementById("playbox").setAttribute("onclick", "tonyva()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function achmedk() {
  document.getElementById("playbox").src = "images/achmedk.png";
  document.getElementById("playbox").setAttribute("onclick", "achmedva()");
  document.getElementById("talkbox2").classList.remove("none");
  document.getElementById("directions").style.display = "none";
}
function amirk() {
  document.getElementById("playbox").src = "images/amirk.png";
  document.getElementById("playbox").setAttribute("onclick", "amirva()");
  document.getElementById("directions").style.display = "none";
  document.getElementById("talkbox2").classList.remove("none");
}
function lulu() {
  document.getElementById("playbox").src = "images/lulu.png";
  document.getElementById("playbox").setAttribute("onclick", "luluva()");
  document.getElementById("directions").style.display = "none";
  document.getElementById("talkbox2").classList.remove("none");
}
function demitrip() {
  document.getElementById("playbox").src = "images/dmitrip.png";
  document.getElementById("playbox").setAttribute("onclick", "demitriva()");
  document.getElementById("directions").style.display = "none";
  document.getElementById("talkbox2").classList.remove("none");
}

function clintcam() {
  const modal = document.getElementById("cam");
  const tvVideo = document.getElementById("clintscare");
  modal.style.display = "flex";
  tvVideo.style.display = "block";
  tvVideo.play();
  setTimeout(function () {
    hideclint();
  }, 8000);
}

function hideclint() {
  const tvVideo = document.getElementById("clintscare");
  const modal = document.getElementById("cam");
  modal.style.display = "none";
  tvVideo.pause();
  tvVideo.currentTime = 0;
  document.getElementById("hidecam").onclick = null;
  document.getElementById("hidecam").classList.remove("clickable");
}

function nothingtext() {
  document.getElementById("nothingl4d").classList.remove("none");
  document.getElementById("boxbox4").classList.remove("clickable");
}
function nothingtext2() {
  document.getElementById("nothingl4d2").classList.remove("none");
  document.getElementById("boxbox5").classList.remove("clickable");
}
function screw() {
  document.getElementById("screwdriver").classList.remove("none");
  document.getElementById("nothingl4d7").classList.remove("none");
  document.getElementById("boxbox1").classList.remove("clickable");
}
function hammer() {
  document.getElementById("hammer").classList.remove("none");
  document.getElementById("boxbox3").classList.remove("clickable");
}
function blueglock() {
  document.getElementById("boxbox2").classList.remove("clickable");
  document.getElementById("glock").classList.remove("none");
  document.getElementById("blueglock").classList.remove("none");
  document.getElementById("textboxblue").classList.remove("none");
}
function tonyva() {
  if (v1 == 0) {
    document.getElementById("t1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("t2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("t3").play();
    v1 = 0;
  }
}

function amirva() {
  if (v1 == 0) {
    document.getElementById("am1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("am2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("am3").play();
    v1++;
  } else if (v1 == 3) {
    document.getElementById("am4").play();
    v1 = 0;
  }
}

function achmedva() {
  if (v1 == 0) {
    document.getElementById("a1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("a2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("a3").play();
    v1 = 0;
  }
}

function luluva() {
  if (v1 == 0) {
    document.getElementById("l1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("l2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("l3").play();
    v1 = 0;
  }
}

function demitriva() {
  if (v1 == 0) {
    document.getElementById("dm1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("dm2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("dm3").play();
    v1 = 0;
  }
}

function peteva() {
  if (v1 == 0) {
    document.getElementById("p1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("p2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("p3").play();
    v1++;
  } else if (v1 == 3) {
    document.getElementById("p4").play();
    v1 = 0;
  }
}

function kieshava() {
  if (v1 == 0) {
    document.getElementById("k1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("k2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("k3").play();
    v1++;
  } else if (v1 == 3) {
    document.getElementById("k4").play();
    v1 = 0;
  }
}

function danteva() {
  if (v1 == 0) {
    document.getElementById("dr1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("dr2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("dr3").play();
    v1 = 0;
  }
}

function mikeyva() {
  if (v1 == 0) {
    document.getElementById("m1").play();
    v1++;
  } else if (v1 == 1) {
    document.getElementById("m2").play();
    v1++;
  } else if (v1 == 2) {
    document.getElementById("m3").play();
    v1 = 0;
  }
}
function RadioError() {
  document.getElementById("RadioError").play();
}

function showfrog() {
  document.getElementById("frog").classList.remove("none");
  document.getElementById("frogyes").classList.remove("none");
}
function checkInput() {
  console.log("rightinput");
  if (
    document.getElementById("answer1").value == "74119" ||
    document.getElementById("answer1").value == "7 41 19"
  ) {
    document.getElementById("answer1").classList.add("none");
    document.getElementById("Submit1").classList.add("none");
    document.getElementById("codesolve").classList.add("none");
    document.getElementById("codeboxsolve").classList.add("none");
    document.getElementById("solver3d").classList.add("none");
    document.getElementById("solver3d2").classList.add("none");
    document.getElementById("key").classList.remove("none");
    document.getElementById("modal3id").classList.add("center-content");
  }
  input_div.value = "";
}
function keyClick() {
  document.getElementById("key").classList.add("none");
  document.getElementById("codeboxSolve").classList.remove("none");
  document.getElementById("checkDoor").classList.remove("none");
  document.getElementById("exit").setAttribute("onclick", "exit()");
}
function exit() {
  window.location.href = "https://cjg9nx.csb.app/";
}
window.onload = function () {
  startModal();
};

function startModal() {
  const introModal = document.getElementById("intro");
  introModal.style.display = "flex";
}
function hideStartModal() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("backAmbience").play();
}

function playBGMusic() {
  var audio = document.getElementById("backAmbience");
  audio.volume = 0.7;
  audio.play();
}
