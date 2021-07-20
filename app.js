let toinput = document.querySelector('.toinput')
let todobutton = document.querySelector('.todobutton')
let todolist = document.querySelector('.todolist')
let listli = document.querySelector('.listli')
let select = document.getElementById('select')

document.addEventListener('DOMContentLoaded', getStroge)
todobutton.addEventListener('click', toDoo)
todolist.addEventListener('click', delateTrush)
select.addEventListener('click', todoselect)

function toDoo(){

//create div
let domDiv = document.createElement('div')
domDiv.classList.add('Do')
todolist.appendChild(domDiv)
 //create li
 let domli = document.createElement('li')
 domli.classList.add('listli')
 domli.innerText = toinput.value
 saveStorege(toinput.value)
 domDiv.appendChild(domli)
 //create button complite
 let domcpmbutton = document.createElement('button')
 domcpmbutton.classList.add('cpm')
 domcpmbutton.innerHTML = '<i class="fa fa-check"></i>'
 domDiv.appendChild(domcpmbutton)
//create button trush
 let domtrushbutton = document.createElement('button')
 domtrushbutton.classList.add('trush')
 domtrushbutton.innerHTML = '<i class="fa fa-trash"></i>'
 domDiv.appendChild(domtrushbutton)
 //remove todo value
 toinput.value = ''


}

// delate btn trush

function delateTrush(e){

    let it =  e.target

    if(it.classList[0] === 'trush'){
       let to = it.parentElement;
       to.classList.add('fall');
       removeStorage(to);
       to.addEventListener('transitionend', function(){
           to.remove()
       })
      
    }

    if(e.target.classList[0] === 'cpm'){
        let to = it.parentElement;
        to.classList.toggle('complate');
    }

}


// select option in tolist
function todoselect(e){
    let todo = todolist.childNodes
    
    todo.forEach( item =>{
       switch(e.target.value){
           case 'all':
               item.style.display = 'flex'
               break;
               case 'complite':
                   if(item.classList.contains('complate')){
                       item.style.display = 'flex'
                   }else{
                       item.style.display = 'none'
                   }
                break;
                case 'uncomplite':
                    if(!item.classList.contains('complate')){
                        item.style.display = 'flex'
                    }else{
                        item.style.display = 'none'
                    }
                break;
       }
    })

}

// select option in tolist


//save option in localstorage

function saveStorege(data){
    let shown;
    
    if( localStorage.getItem('shown') === null){
        shown = []
    }else{
        shown = JSON.parse( localStorage.getItem('shown') )
    }
    shown.push(data);
    localStorage.setItem('shown', JSON.stringify(shown))
}

function getStroge(){
    let shown;
    
    if( localStorage.getItem('shown') === null){
        shown = [];
    }else{
        shown = JSON.parse(localStorage.getItem('shown'))
    }
    shown.forEach( function(idata) {

        //create div
        let domDiv = document.createElement('div')
        domDiv.classList.add('Do')
        todolist.appendChild(domDiv)
         //create li
         let domli = document.createElement('li')
         domli.classList.add('listli')
         domli.innerText = idata
         domDiv.appendChild(domli)
         //create button complite
         let domcpmbutton = document.createElement('button')
         domcpmbutton.classList.add('cpm')
         domcpmbutton.innerHTML = '<i class="fa fa-check"></i>'
         domDiv.appendChild(domcpmbutton)
        //create button trush
         let domtrushbutton = document.createElement('button')
         domtrushbutton.classList.add('trush')
         domtrushbutton.innerHTML = '<i class="fa fa-trash"></i>'
         domDiv.appendChild(domtrushbutton)
    })
  
}

function removeStorage(todo){
    let shown;
    
    if( localStorage.getItem('shown') === null){
        shown = [];
    }else{
        shown = JSON.parse(localStorage.getItem('shown'))
    }

    let index = todo.children[0].innerText
    shown.splice(shown.indexOf(index), 1)
    localStorage.setItem('shown', JSON.stringify(shown))
}