import { Lodowka } from "./Lodowka"
import { Note } from "./Note"

export const obLod = new Lodowka()
document.querySelector("button.add").addEventListener("click", () => {obLod.newNote()});
document.getElementById("cancer").addEventListener("click", Note.close_editor);
document.getElementById("save").addEventListener("click", () => {Note.saveContent(obLod.active);});