JavaScript
let total Seconds = 7385;

let hours = Math.Floor(totalSeconds / 3600);
let minutes = Math.Floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(hours + "години," + minutes + "хвилини," + seconds + "секунд");
