let nome_aluno = prompt('Digite o nome do aluno')

if(nome_aluno.length < 5){
    alert('Nome deve ter no mínimo 5 caracteres')
}else{

let materia_1  = prompt('Digite a primeira matéria')
let nota_1     = Number (prompt('Insira a nota'))

if(nota_1 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_1 > 10){
    alert('Nota não deve ser maior que 10')

}else{

let materia_2  = prompt('Digite a segunda matéria')
let nota_2     = Number (prompt('Insira a nota'))

if(nota_2 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_2 > 10){
    alert('Nota não deve ser maior que 10')

}else{
   
let materia_3  = prompt('Digite a terceira matéria')
let nota_3     = Number (prompt('Insira a nota'))

if(nota_3 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_3 > 10){
    alert('Nota não deve ser maior que 10')

}else{

let materia_4  = prompt('Digite a quarta matéria')
let nota_4     = Number (prompt('Insira a nota'))

if(nota_4 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_4 > 10){
    alert('Nota não deve ser maior que 10')

}else{

let materia_5  = prompt('Digite a quinta matéria')
let nota_5    = Number (prompt('Insira a nota'))

if(nota_5 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_5 > 10){
    alert('Nota não deve ser maior que 10')

}else{

let materia_6  = prompt('Digite a sexta matéria')
let nota_6    = Number (prompt('Insira a nota'))

if(nota_6 == 0){
    alert('A nota não pode ser 0')
    

}else if(nota_6 > 10){
    alert('Nota não deve ser maior que 10')

}else{

let materia_7  = prompt('Digite a sétima matéria')
let nota_7    = Number (prompt('Insira a nota'))

if(nota_7 == 0){
    alert('A nota não pode ser 0')
    

}else if(nota_7 > 10){
    alert('Nota não deve ser maior que 10')
}else{
     
let materia_8  = prompt('Digite a oitava matéria')
let nota_8    = Number (prompt('Insira a nota'))

if(nota_8 == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_8 > 10){
    alert('Nota não deve ser maior que 10')

}else{
    
    let materia_9  = prompt('Digite a nona matéria')
    let nota_9    = Number (prompt('Insira a nota'))
    
if(nota_9 == 0){
    alert('A nota não pode ser 0')
        
}else if(nota_9 > 10){
    alert('Nota não deve ser maior que 10')

}else{

    let materia_10  = prompt('Digite a décima matéria')
    let nota_10    = Number (prompt('Insira a nota'))
        
    if(nota_10 == 0){
        alert('A nota não pode ser 0')
            
}else if(nota_10 > 10){
    alert('Nota não deve ser maior que 10')

}else{

        

let nota_presença = Number(prompt('Insira a nota de presença'))
if(nota_presença == 0){
    alert('A nota não pode ser 0')
    
}else if(nota_presença > 10){
    alert('Nota não pode ser maior que 10')

}else{

    let soma_nota = (nota_1 + nota_2 + nota_3 + nota_4 + nota_5 + nota_6 + nota_7 + nota_8 + nota_9 + nota_10)
    let media_nota = (soma_nota / 10)
    
    if(media_nota >= 8 && nota_presença >= 8){
        alert(`A nota do aluno ${nome_aluno} é de de ${media_nota} e sua nota de presença foi de ${nota_presença}: Aluno aprovado!`)
    
    }else if(media_nota < 8 && nota_presença < 8){
        alert(`A nota do aluno ${nome_aluno} é de de ${media_nota} e sua nota de presença foi de ${nota_presença}: Aluno reprovado :c`)
    }


}
 }
  }
   }
    }   
     }
      }
       }
        }
         }  
          }
           }














