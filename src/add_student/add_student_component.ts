import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"add_student",
    standalone: true,
    templateUrl:"add_student_component.html",
    styleUrl:"add_student_component.scss",
    imports: [FormsModule]
})



export class AddStudent{

    onStuBack=output<void>();
    onStuExit=output<void>();


    id=""
    rollNo=""
    name=""
    fatherName=""
    gender=""
    age=""
    branch=""
    year=""
    sem=""
    mobileNo=""
    email=""
    address=""
    password=""

    

    students=[
        {
            id:1,
            rollNo:101,
            name:"Raju",
            fatherName:"RajuKaBaap",
            gender:"male",
            age:23,
            branch:"cs",
            year:2026,
            sem:4,
            mobileNo:1234567899,
            email:"raju@gmail.com",
            address:"nagpur",
            password: "12a34",
        },
    ]

    save(){
        this.students.push({
            id:parseInt(this.id),
            rollNo:parseInt(this.rollNo),
            name:this.name,
            fatherName:this.fatherName,
            gender:this.gender,
            age:parseInt(this.age),
            branch:this.branch,
            year:parseInt(this.year),
            sem:parseInt(this.sem),
            mobileNo:parseInt(this.mobileNo),
            email:this.email,
            address:this.address,
            password:this.password,
        })
    }

    exit(){
        this.onStuExit.emit();
    }
    back(){
        this.onStuBack.emit();
    }
}  