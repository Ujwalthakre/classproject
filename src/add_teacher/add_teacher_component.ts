import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "add_teacher",
    imports:[FormsModule],
    standalone:true,
    styleUrl: "add_teacher_component.scss",
    templateUrl: "add_teacher_component.html"
})

export class AddTeacher{

    onTeaBack=output<void>();
    onTeaExit=output<void>();


    tId="";
    tName="";
    tMobNum="";
    tEmail="";
    tPass="";

    teachers=[{
        tId:101,
        tName:"Nandini",
        tMobNum:"1234567899",
        tEmail:"teach@gmail.com",
        tPass:"1234"
    },]

    save(){
        this.teachers.push({
            tId:parseInt(this.tId),
            tName:this.tName,
            tMobNum:this.tMobNum,
            tEmail:this.tEmail,
            tPass:this.tPass
        })
    }

    back(){
        this.onTeaBack.emit();
    }
    exit(){
        this.onTeaExit.emit();
    }

}

