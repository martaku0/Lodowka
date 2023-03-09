import { Note } from "./Note"

export class Lodowka {
    private name:string;
    private magnesy:Array<Note>;
    private idnot:number
    private notnow:number
    private info_notes_now:HTMLSpanElement
    private info_notes_all:HTMLSpanElement
    public board:HTMLDivElement
    active:string;
    
    newNote(){
        let note = new Note(this.idnot.toString(),"","0","0",this);
        this.magnesy.push(note);
        this.idnot++; 
        this.notnow++;
        if(this.info_notes_now) this.info_notes_now.innerHTML = this.notnow.toString();
        if(this.info_notes_all) this.info_notes_all.innerHTML = this.idnot.toString(); 
    }

    static remove(nota: Note, lod: Lodowka){
        lod.notnow--;
        nota.el.remove();
        let indx = lod.magnesy.indexOf(nota);
        if(indx > -1) lod.magnesy.splice(indx,1);
        if(lod.info_notes_now) lod.info_notes_now.innerHTML = lod.notnow.toString();
    }

    static podOJ(el : HTMLDivElement, lod: Lodowka) {
        let a = document.querySelectorAll('#board-main > div');
        Array.prototype.slice.call(a).forEach((element: { style: { zIndex: number; }; }) => {
            element.style.zIndex -= 1;
        });
        el.style.zIndex = lod.idnot.toString()
    }

    constructor() {
        this.magnesy = [];
        this.idnot = 0
        this.notnow = 0
        this.info_notes_now = document.querySelector("#notes-now")
        this.info_notes_all = document.querySelector("#notes-all")
        this.board = document.querySelector("#board-main")
    }    
}

