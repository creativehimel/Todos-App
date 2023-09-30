import {defineStore} from "pinia"
import router from "@/router";
import Swal from "sweetalert2";


export const useAuthStore = defineStore('auth', {
    state: ()=>({
        userEmail: 'admin@gmail.com',
        userPassword: '123456',
        isAuthenticated: false
    }),
    getters: {

    },
    actions: {
        addUser(newUser){
            this.userEmail = newUser.email
            this.userPassword = newUser.password
        },
        login(email, password){
            //console.log(email, password)
                if (this.userEmail == email && this.userPassword == password){
                    this.isAuthenticated = true
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Login successfully'
                    })
                    router.push('/task')
                }else {
                    console.log(email, password)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email or Password does not match',
                    })
                }
            }


        }

})