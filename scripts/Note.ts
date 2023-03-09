import { Lodowka } from "./Lodowka";

export class Note{
    private text: string;
    private id: string;
    el: HTMLDivElement;
    private ojc: Lodowka;
    private left: string;
    private top: string;

    constructor(id_:string, text_:string, left_:string, top_:string, o:Lodowka){
        this.ojc = o;
        this.id = id_;
        this.text = text_;
        this.left = left_;
        this.top = top_;
        this.el = document.createElement("div");
        let elInel : HTMLDivElement = document.createElement("div");

        if(o.board) o.board.appendChild(this.el);
        this.el.classList.add("oneOfNote");
        this.el.classList.add(`note${this.id}`);

        elInel.id = this.id;
        this.el.style.top = top_;
        this.el.style.left = left_;
        elInel.innerHTML = text_;

        this.el.appendChild(elInel);

        let del:HTMLSpanElement = document.createElement("span");
        this.el.appendChild(del);
        del.classList.add("deleteNote");
        del.innerHTML = "X";

        let edit:HTMLSpanElement = document.createElement("span");
        this.el.appendChild(edit);
        edit.classList.add("editNote");
        edit.innerHTML = "#";

        let o_x : number, o_y : number, h:string, w:string, d:boolean;
        const mouseMove = (e : MouseEvent) => {
                if(h==this.el.style.height && w==this.el.style.width && d){
                    this.el.style.left = (o_x + e.clientX) + 'px';
                    this.el.style.top  = (o_y + e.clientY) + 'px';
                }else{
                    d = true;
                }
        }
        this.el.addEventListener("mousedown", (e) => {
            Lodowka.podOJ(this.el, this.ojc)
            h = this.el.style.height
            w = this.el.style.width
            d = false
            o_x = this.el.offsetLeft - e.clientX;
            o_y = this.el.offsetTop - e.clientY;
            this.el.addEventListener("mousemove", mouseMove);
        });
        this.el.addEventListener("mouseup", (e) => {
            this.el.removeEventListener("mousemove", mouseMove);
            if(parseInt(this.el.style.top) < 0) {
                this.el.style.top = "0";
            }
            if(parseInt(this.el.style.left) < 0) {
                this.el.style.left = "0";
            }   
        });

        del.addEventListener("click", (e) => {
            Lodowka.remove(this, this.ojc);
        });

        edit.addEventListener("click", (e) => {
            o.active = this.id;
            let ed = document.getElementById("editor-div");
            ed.style.display = "block";
            let contentDiv = document.getElementById(`${this.id}`).innerHTML;
            document.querySelector("iframe").contentWindow.document.body.innerHTML = contentDiv;
        });
    }

    static saveContent(id_ : string){
        let contentEditor = document.querySelector("iframe").contentWindow.document.body.innerHTML;
        let contentDiv = document.getElementById(`${id_}`);
        contentDiv.innerHTML = contentEditor;
        this.close_editor();
    }

    static close_editor(){
        let ed = document.getElementById("editor-div");
        ed.style.display = "none";
    }
}

