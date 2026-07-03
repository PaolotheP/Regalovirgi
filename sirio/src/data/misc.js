/* Facciata multi-materia: contenuti trasversali della materia corrente
   (mentori, Q&A, bandi, libreria, gemello, coorte, glossario, ripasso). */
import { currentSubjectId } from "../lib/subject.js";
import * as PENALE from "./penale/misc.js";
import * as TRIBUTARIO from "./tributario/misc.js";

const D = currentSubjectId() === "tributario" ? TRIBUTARIO : PENALE;

export const MENTORI = D.MENTORI;
export const QA = D.QA;
export const BANDI = D.BANDI;
export const LIBRARY = D.LIBRARY;
export const TWIN = D.TWIN;
export const COHORT = D.COHORT;
export const COSTUDY_ROOMS = D.COSTUDY_ROOMS;
export const COSTUDY_PEOPLE = D.COSTUDY_PEOPLE;
export const GLOSSARIO = D.GLOSSARIO;
export const RIPASSO = D.RIPASSO;
