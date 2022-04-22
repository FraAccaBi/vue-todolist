/* ## Istruzioni

## Bonus-extra (opzionale)
- Quando una task é stata completa allora l'utente vuole che venga inserita in un'altra colonna tipo "tasks completate"
- se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
- ah non é finita, dice che quando cancella una task non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
- si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste ... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha cancellata per sbaglio...
Qui sotto alcuni screenshot per farvi vedere il funzionamento dell'app
*/

const app = new Vue({
    el: '#app',
    data:{
        index: 0,
        newTask: '',
        completed: [
            {
                task: 'laundry',
                boolean: true
            }
        ],
        tasks: [
            {
                task:'Laundry',
                boolean: true
            },
            {
                task:'Homework',
                boolean: false
            },
            {
                task:'Shopping',
                boolean: true
            }
        ],
        
    },
    methods: {
        addTask(){
            if (this.newTask !== '') {
                this.tasks.unshift({task: `${this.newTask}`, boolean: true});
                this.newTask = ''
            }            
        },
        removeTask(index){
            //this.completed.push({task: `${this.newTask}`, boolean: true});
            //console.log(completed);
            this.tasks.splice(index, 1)
        },
        addDone(index){
            this.tasks[index].boolean = false
        }
    }
});
