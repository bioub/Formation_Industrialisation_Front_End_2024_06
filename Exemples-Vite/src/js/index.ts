import { Horloge } from "./horloge";

const divElt = document.querySelector(".horloge") as HTMLDivElement;
const clock = new Horloge(divElt);
clock.start();
