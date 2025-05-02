const p1img = document.querySelector("#p1_img");
const p2img = document.querySelector("#p2_img");
const p1name = document.querySelector("#p1_name");
const p2name = document.querySelector("#p2_name");
const p1moves = document.querySelector("#p1_move1");
const p2moves = document.querySelector("#p2_move1");
const p2moves2 = document.querySelector("#p2_move2");
const p1moves2 = document.querySelector("#p1_move2");
const p1moves3 = document.querySelector("#p1_move3");
const p2moves3 = document.querySelector("#p2_move3");
const p1moves4 = document.querySelector("#p1_move4");
const p2moves4 = document.querySelector("#p2_move4");
const p1hp = document.querySelector("#p1_hp");
const p2hp = document.querySelector("#p2_hp");
const p1hp_bar = document.querySelector("#p1_hp_text");
const p2hp_bar = document.querySelector("#p2_hp_text");

let randomnum1 = Math.floor(Math.random() * 1028);
let randomnum2 = Math.floor(Math.random() * 1028);
const linkp1 = `https://pokeapi.co/api/v2/pokemon/${randomnum1}`;
const linkp2 = `https://pokeapi.co/api/v2/pokemon/${randomnum2}`;

(async () => {
  try {
    function rn1() {
      randomnum1 = Math.floor(Math.random() * 1028);
    }
    function rn2() {
      randomnum2 = Math.floor(Math.random() * 1028);
    }
    let p1wins = document.getElementById("p1_wins");
    let p2wins = document.getElementById("p2_wins");
    // ========== P1 ==========
    let randommoves1;
    let randommoves2;
    let randommoves3;
    let randommoves4;
    let p1ppm1 = document.querySelector("#p1_pp_m1");
    let p1ppm2 = document.querySelector("#p1_pp_m2");
    let p1ppm3 = document.querySelector("#p1_pp_m3");
    let p1ppm4 = document.querySelector("#p1_pp_m4");
    let p1dmgm1 = document.querySelector("#p1_dmg_m1");
    let p1dmgm2 = document.querySelector("#p1_dmg_m2");
    let p1dmgm3 = document.querySelector("#p1_dmg_m3");
    let p1dmgm4 = document.querySelector("#p1_dmg_m4");

    const response1 = await fetch(linkp1);
    const data1 = await response1.json();
    let pokemonMoves1 = data1.moves.length;

    const response2 = await fetch(linkp2);
    const data2 = await response2.json();

    // Ensure we have at least 4 unique moves
    if (pokemonMoves1 < 4) {
      location.reload(); // Reload if not enough moves
      return;
    }

    // Get 4 unique random moves
    const movesIndices1 = [];
    while (movesIndices1.length < 4) {
      const randomIndex = Math.floor(Math.random() * pokemonMoves1);
      if (!movesIndices1.includes(randomIndex)) {
        movesIndices1.push(randomIndex);
      }
    }
    [randommoves1, randommoves2, randommoves3, randommoves4] = movesIndices1;

    let dfp1 = await fetch(data1.moves[randommoves1].move.url);
    let dfp2 = await fetch(data1.moves[randommoves2].move.url);
    let dfp3 = await fetch(data1.moves[randommoves3].move.url);
    let dfp4 = await fetch(data1.moves[randommoves4].move.url);
    let dfp1_data = await dfp1.json();
    let dfp2_data = await dfp2.json();
    let dfp3_data = await dfp3.json();
    let dfp4_data = await dfp4.json();

    let p1p1 = dfp1_data.pp;
    let p1p2 = dfp2_data.pp;
    let p1p3 = dfp3_data.pp;
    let p1p4 = dfp4_data.pp;

    p1dmgm1.innerHTML =
      (dfp1_data.power !== null ? dfp1_data.power : "N/A") + " dmg";
    p1dmgm2.innerHTML =
      (dfp2_data.power !== null ? dfp2_data.power : "N/A") + " dmg";
    p1dmgm3.innerHTML =
      (dfp3_data.power !== null ? dfp3_data.power : "N/A") + " dmg";
    p1dmgm4.innerHTML =
      (dfp4_data.power !== null ? dfp4_data.power : "N/A") + " dmg";

    p1ppm1.innerHTML = `${p1p1}/${dfp1_data.pp} pp`;
    p1ppm2.innerHTML = `${p1p2}/${dfp2_data.pp} pp`;
    p1ppm3.innerHTML = `${p1p3}/${dfp3_data.pp} pp`;
    p1ppm4.innerHTML = `${p1p4}/${dfp4_data.pp} pp`;

    const p1_data = {
      name: data1.name,
      img: data1.sprites.front_default,
      hp: data1.stats[0].base_stat,
    };
    let remaininghp = p1_data.hp;
    p1img.src = p1_data.img;
    p1name.innerHTML = p1_data.name;
    p1moves.innerHTML = data1.moves[randommoves1].move.name;
    p1moves2.innerHTML = data1.moves[randommoves2].move.name;
    p1moves3.innerHTML = data1.moves[randommoves3].move.name;
    p1moves4.innerHTML = data1.moves[randommoves4].move.name;
    p1hp_bar.innerHTML = p1_data.hp + " HP";
    p1hp.style.width = `${(remaininghp / p1_data.hp) * 100}%`;

    // ========== P2 ==========
    let rmp1;
    let rmp2;
    let rmp3;
    let rmp4;
    let p2ppm1 = document.querySelector("#p2_pp_m1");
    let p2ppm2 = document.querySelector("#p2_pp_m2");
    let p2ppm3 = document.querySelector("#p2_pp_m3");
    let p2ppm4 = document.querySelector("#p2_pp_m4");
    let p2dmgm1 = document.querySelector("#p2_dmg_m1");
    let p2dmgm2 = document.querySelector("#p2_dmg_m2");
    let p2dmgm3 = document.querySelector("#p2_dmg_m3");
    let p2dmgm4 = document.querySelector("#p2_dmg_m4");

    let pokemonMoves2 = data2.moves.length;

    // Ensure we have at least 4 unique moves
    if (pokemonMoves2 < 4) {
      location.reload(); // Reload if not enough moves
      return;
    }

    // Get 4 unique random moves
    const movesIndices2 = [];
    while (movesIndices2.length < 4) {
      const randomIndex = Math.floor(Math.random() * pokemonMoves2);
      if (!movesIndices2.includes(randomIndex)) {
        movesIndices2.push(randomIndex);
      }
    }
    [rmp1, rmp2, rmp3, rmp4] = movesIndices2;

    let m1 = await fetch(data2.moves[rmp1].move.url);
    let m2 = await fetch(data2.moves[rmp2].move.url);
    let m3 = await fetch(data2.moves[rmp3].move.url);
    let m4 = await fetch(data2.moves[rmp4].move.url);
    let m1_data = await m1.json();
    let m2_data = await m2.json();
    let m3_data = await m3.json();
    let m4_data = await m4.json();

    let pp1 = m1_data.pp;
    let pp2 = m2_data.pp;
    let pp3 = m3_data.pp;
    let pp4 = m4_data.pp;

    p2dmgm1.innerHTML =
      (m1_data.power !== null ? m1_data.power : "N/A") + " dmg";
    p2dmgm2.innerHTML =
      (m2_data.power !== null ? m2_data.power : "N/A") + " dmg";
    p2dmgm3.innerHTML =
      (m3_data.power !== null ? m3_data.power : "N/A") + " dmg";
    p2dmgm4.innerHTML =
      (m4_data.power !== null ? m4_data.power : "N/A") + " dmg";

    p2ppm1.innerHTML = `${pp1}/${m1_data.pp} pp`;
    p2ppm2.innerHTML = `${pp2}/${m2_data.pp} pp`;
    p2ppm3.innerHTML = `${pp3}/${m3_data.pp} pp`;
    p2ppm4.innerHTML = `${pp4}/${m4_data.pp} pp`;

    const p2_data = {
      name: data2.name,
      img: data2.sprites.front_default,
      hp: data2.stats[0].base_stat,
    };
    let remaininghp2 = p2_data.hp;
    p2img.src = p2_data.img;
    p2name.innerHTML = p2_data.name;
    p2moves.innerHTML = data2.moves[rmp1].move.name;
    p2moves2.innerHTML = data2.moves[rmp2].move.name;
    p2moves3.innerHTML = data2.moves[rmp3].move.name;
    p2moves4.innerHTML = data2.moves[rmp4].move.name;
    p2hp_bar.innerHTML = remaininghp2 + " HP";
    p2hp.style.width = `${(remaininghp2 / p2_data.hp) * 100}%`;

    // Helper function to check win conditions
    function checkWinConditions() {
      if (remaininghp <= 0) {
        p1hp_bar.innerHTML = "0 HP";
        p1hp.style.width = `0%`;
        alert(`${p2_data.name} wins!`);

        // Update p2 wins
        let currentP2Wins = parseInt(localStorage.getItem("p2wins")) || 0;
        currentP2Wins += 1;
        localStorage.setItem("p2wins", currentP2Wins);
        p2wins.innerHTML = currentP2Wins; // Update the UI for Player 2

        // Optionally, you can reload the page here if needed
        location.reload();
        return true;
      }

      if (remaininghp2 <= 0) {
        p2hp_bar.innerHTML = "0 HP";
        p2hp.style.width = `0%`;
        alert(`${p1_data.name} wins!`);

        // Update p1 wins
        let currentP1Wins = parseInt(localStorage.getItem("p1wins")) || 0;
        currentP1Wins += 1;
        localStorage.setItem("p1wins", currentP1Wins);
        p1wins.innerHTML = currentP1Wins; // Update the UI for Player 1

        // Optionally, you can reload the page here if needed
        location.reload();
        return true;
      }

      return false;
    }
    p1wins.innerHTML = localStorage.getItem("p1wins") || 0;
    p2wins.innerHTML = localStorage.getItem("p2wins") || 0;
    // Load initial scores from localStorage if available
    document.addEventListener("DOMContentLoaded", () => {
      let savedP1Wins = localStorage.getItem("p1wins");
      let savedP2Wins = localStorage.getItem("p2wins");

      // If there's no value in localStorage, set them to 0
      if (savedP1Wins) p1wins.innerHTML = savedP1Wins;
      if (savedP2Wins) p2wins.innerHTML = savedP2Wins;
    });

    // Helper function to disable move when PP is 0
    function disableMoveIfNeeded(moveElement, pp) {
      if (pp <= 0) {
        moveElement.style.pointerEvents = "none";
        moveElement.style.opacity = "0.5";
        moveElement.style.textDecoration = "line-through";
      }
    }

    // ================ battle ================
    // P1 Move 1
    p1moves.addEventListener("click", () => {
      if (p1p1 <= 0) return;

      p1p1 -= 1;
      remaininghp2 -= dfp1_data.power || 0;
      if (remaininghp2 < 0) remaininghp2 = 0;

      p2hp_bar.innerHTML = remaininghp2 + " HP";
      p2hp.style.width = `${(remaininghp2 / p2_data.hp) * 100}%`;
      p1ppm1.innerHTML = `${p1p1}/${dfp1_data.pp} pp`;

      disableMoveIfNeeded(p1moves, p1p1);
      if (checkWinConditions()) return;
    });

    // P1 Move 2
    p1moves2.addEventListener("click", () => {
      if (p1p2 <= 0) return;

      p1p2 -= 1;
      remaininghp2 -= dfp2_data.power || 0;
      if (remaininghp2 < 0) remaininghp2 = 0;

      p2hp_bar.innerHTML = remaininghp2 + " HP";
      p2hp.style.width = `${(remaininghp2 / p2_data.hp) * 100}%`;
      p1ppm2.innerHTML = `${p1p2}/${dfp2_data.pp} pp`;

      disableMoveIfNeeded(p1moves2, p1p2);
      if (checkWinConditions()) return;
    });

    // P1 Move 3
    p1moves3.addEventListener("click", () => {
      if (p1p3 <= 0) return;

      p1p3 -= 1;
      remaininghp2 -= dfp3_data.power || 0;
      if (remaininghp2 < 0) remaininghp2 = 0;

      p2hp_bar.innerHTML = remaininghp2 + " HP";
      p2hp.style.width = `${(remaininghp2 / p2_data.hp) * 100}%`;
      p1ppm3.innerHTML = `${p1p3}/${dfp3_data.pp} pp`;

      disableMoveIfNeeded(p1moves3, p1p3);
      if (checkWinConditions()) return;
    });

    // P1 Move 4
    p1moves4.addEventListener("click", () => {
      if (p1p4 <= 0) return;

      p1p4 -= 1;
      remaininghp2 -= dfp4_data.power || 0;
      if (remaininghp2 < 0) remaininghp2 = 0;

      p2hp_bar.innerHTML = remaininghp2 + " HP";
      p2hp.style.width = `${(remaininghp2 / p2_data.hp) * 100}%`;
      p1ppm4.innerHTML = `${p1p4}/${dfp4_data.pp} pp`;

      disableMoveIfNeeded(p1moves4, p1p4);
      if (checkWinConditions()) return;
    });

    // P2 Move 1
    p2moves.addEventListener("click", () => {
      if (pp1 <= 0) return;

      pp1 -= 1;
      remaininghp -= m1_data.power || 0;
      if (remaininghp < 0) remaininghp = 0;

      p1hp_bar.innerHTML = remaininghp + " HP";
      p1hp.style.width = `${(remaininghp / p1_data.hp) * 100}%`;
      p2ppm1.innerHTML = `${pp1}/${m1_data.pp} pp`;

      disableMoveIfNeeded(p2moves, pp1);
      if (checkWinConditions()) return;
    });

    // P2 Move 2
    p2moves2.addEventListener("click", () => {
      if (pp2 <= 0) return;

      pp2 -= 1;
      remaininghp -= m2_data.power || 0;
      if (remaininghp < 0) remaininghp = 0;

      p1hp_bar.innerHTML = remaininghp + " HP";
      p1hp.style.width = `${(remaininghp / p1_data.hp) * 100}%`;
      p2ppm2.innerHTML = `${pp2}/${m2_data.pp} pp`;

      disableMoveIfNeeded(p2moves2, pp2);
      if (checkWinConditions()) return;
    });

    // P2 Move 3
    p2moves3.addEventListener("click", () => {
      if (pp3 <= 0) return;

      pp3 -= 1;
      remaininghp -= m3_data.power || 0;
      if (remaininghp < 0) remaininghp = 0;

      p1hp_bar.innerHTML = remaininghp + " HP";
      p1hp.style.width = `${(remaininghp / p1_data.hp) * 100}%`;
      p2ppm3.innerHTML = `${pp3}/${m3_data.pp} pp`;

      disableMoveIfNeeded(p2moves3, pp3);
      if (checkWinConditions()) return;
    });

    // P2 Move 4
    p2moves4.addEventListener("click", () => {
      if (pp4 <= 0) return;

      pp4 -= 1;
      remaininghp -= m4_data.power || 0;
      if (remaininghp < 0) remaininghp = 0;

      p1hp_bar.innerHTML = remaininghp + " HP";
      p1hp.style.width = `${(remaininghp / p1_data.hp) * 100}%`;
      p2ppm4.innerHTML = `${pp4}/${m4_data.pp} pp`;

      disableMoveIfNeeded(p2moves4, pp4);
      if (checkWinConditions()) return;
    });
  } catch (error) {
    console.error("Error:", error);
    location.reload(); // Reload if there's an error
  }
})();
