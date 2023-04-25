/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const { createApp } = Vue

createApp({
  data() {
    return {
        emails: []
    }
  },
  created() {
    this.emailGenerator()
  },
  methods: {
    emailGenerator(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res) => {
            console.log(res.data.response)
            this.emails.push(res.data.response)
            const myEmail = res.data.response
            this.emails.push(myEmail)
            if (this.emails.length < 10){
                this.emailGenerator()
            }
        })
    }
  }
}).mount('#app')