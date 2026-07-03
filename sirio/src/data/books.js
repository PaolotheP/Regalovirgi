/* Facciata multi-materia: manuali della materia corrente. */
import { currentSubjectId } from "../lib/subject.js";
import * as PENALE from "./penale/books.js";
import * as TRIBUTARIO from "./tributario/books.js";

const D = currentSubjectId() === "tributario" ? TRIBUTARIO : PENALE;

export const BOOKS = D.BOOKS;
export const getBook = D.getBook;
export const PROF_BOOK = D.PROF_BOOK;
export const suggestBook = D.suggestBook;
