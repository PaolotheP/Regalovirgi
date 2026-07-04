/* Facciata multi-materia: professori/università/domande della materia
   corrente (vedi lib/subject.js). Le firme restano identiche. */
import { currentSubjectId } from "../lib/subject.js";
import * as PENALE from "./penale/professors.js";
import * as TRIBUTARIO from "./tributario/professors.js";

const D = currentSubjectId() === "tributario" ? TRIBUTARIO : PENALE;

export const UNIVERSITIES = D.UNIVERSITIES;
export const PROFESSORS = D.PROFESSORS;
export const professorsByUni = D.professorsByUni;
export const getProfessor = D.getProfessor;
export const EXAM_QUESTIONS = D.EXAM_QUESTIONS;
