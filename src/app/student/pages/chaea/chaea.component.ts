import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-chaea',
  templateUrl: './chaea.component.html',
  styleUrls: ['./chaea.component.scss']
})
export class ChaeaComponent implements OnInit {

  chaeaQuestions!: chaeaQuestion[];
  singleQuestionResults!: number[];
  asnwersForm!: FormGroup;

  generalResult = {
    activo: 0,
    reflexivo: 0,
    teorico: 0,
    pragmatico: 0
  };

  get conditions(): FormArray {
    return this.asnwersForm.get('answers') as FormArray;
  }

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // Traer el contenido de las preguntas del cuestionario CHAEA
    this.studentService.getChaeaQuestions()
      .subscribe((questions: chaeaQuestion[]) => this.chaeaQuestions = questions);
    
    // Inicializar el array que calcula el resultado de cada pregunta individualmente
    this.initSingleQuestionArray();

    // Inicializa el form group
    this.initAnswersForm();
  }
    
  initSingleQuestionArray() {
    this.singleQuestionResults = new Array(80).fill(0);
  }
  
  initAnswersForm() {
    this.asnwersForm = this.fb.group({
      answers: this.fb.array([])
    });

    //TODO: Inicializar el arreglo de radio en el form group
  }

  computeSingleQuestionResult(mode: string, id: string) {
    let intId = Number(id);

    if (mode === 'add') {
      this.singleQuestionResults[intId] += 1;
    }

    if (mode === 'remove' && this.singleQuestionResults[intId] > 0) {
      this.singleQuestionResults[intId] -= 1;
    }
  }

  computeGeneralResult() {
    this.singleQuestionResults.map((value, i) => {
      let style = this.chaeaQuestions[i].style;
      this.generalResult[style] += value;
    });
  }

  sendForm() {
    this.computeGeneralResult();
    console.log(this.generalResult);
  }

}

interface chaeaQuestion {
  id: string;
  style: string;
  statement: string;
}
