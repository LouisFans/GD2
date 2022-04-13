class Users{
    constructor (username, email, password, password_cofirmation, role){
        this.username = username;
        this.email =email;
        this.password=password;
        this.password_cofirmation=password_cofirmation;
        this.role=role;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password
    }
    getPassword_cofirmation(){
        return this.getPassword_cofirmation;
    }
    setPassword(password){
        this.password=password;
    }
    setPassword_cofirmation(password_cofirmation){
        this.password_cofirmation=password_cofirmation;
    }
    getRole(){
        return this.role
    }
    xuatThongTIn(){
        console.log(`Username:${this.username}`);
        console.log(`Email:${this.email}`);
        console.log(`Password:${this.password}`);
        console.log(`Password_cofirmation:${this.password_cofirmation}`);
        console.log(`Role:${this.role}`);
    }
}
class StoreUsers{
    constructor() {
        this.users = [];
    }
    addUser(user){
        console.log('user', user.getUsername())
        const currentList = this.users
        let check = false

        const isExist = currentList.findIndex(currentUser => currentUser.getUsername() === user.getUsername())
        console.log('isExist', isExist)
        if(isExist === -1){
            this.users.push(user);
            check = true;
            return check
        }
        return check
    }
    login(username, password){
        for (let i = 0; i < this.users.length; i++) {
            const currentUser = this.users[i];
            if(currentUser.getUsername()=== username 
            && currentUser.getPassword()=== password){
                return currentUser
            }
        }
        return null
    }
    save(){
        if(this.users.length > 0){
            const data= JSON.stringify(this.users)
            localStorage.setItem('users', data)
        }
    }
    getData(){
        const data = JSON.parse(localStorage.getItem('users'))
        if(data){
            const listUser =[]
            for (let i = 0; i < data.length; i++) {
                const user =  new User(data[i].username,
                    data[i].email,
                    data[i].password,
                    data[i].password_cofirmation,
                    data[i].role)
                listUser.push(user)
            }
            this.users =listUser
        }
    }
    getListUser(){
        return this.users
    }
    saveUser(user){
        localStorage.setItem('auth', JSON.stringify(user))
    }
    parseUser(){
        const data = JSON.parse(localStorage.getItem('auth'))
        if(data){
            const user = new User(data.username,
                data.email,
                data.password,
                data.password_cofirmation,
                data.role)
            return user
        }
        return null
    }
 }
 
    const store = new StoreUsers();
    store.getData()
    console.log('store', store);
    document.getElementById('form-1') && document.getElementById('form-1').addEventListener('submit', function(event){
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
        const password_cofirmation = document.getElementById('password_confirmation').value;
        const role = document.getElementById('role').value;

        if(username === '' || email==='' ||  password ==='' || password_cofirmation === ''|| role ===''){
            alert('Gia Tri Khong Ton Tai')
        }else {
            const user = new Users(username, email, password, password_cofirmation,role)
            const isCreate = store.addUser(user)
            if(isCreate){
                alert('Đăng Kí Thành Công')
                store.save()
            }else{
                alert('username availible')
            }
            console.log(isCreate)
        }
    })

    // //login
    // const formlogin = document.getElementById('form-login')

    // formlogin && formlogin,addEventListener('submit', function(event){
    //     event.preventDefault();
    //     const username = document.getElementById('username').value;
    //     const password = document.getElementById('password').value

    //     if( username === '' || password === ''){
    //         alert('Fill In the information')
    //         return
    //     }
    //     const isCheck = store.login(username, password)
    //     if(isCheck){
    //         alert('Login SuccessFul')
    //         store.saveUser(isCheck)
    //         if(isCheck.getRole()==='admin'){
    //             window.location.href ='./index.html'
    //         }
    //     }else{
    //         alert('Login Fail')
    //     }
    //     alert('Login DashBoard')
    // })

    // window.addEventListener('ContentLoading', function(){
    //     const currentUser = store.parseUser();
    //     console.log('username', currentUser)
    //     document.getElementById('username').innerHTML = `username: ${currentUser.getUsername()}`;
    //     document.getElementById('email').innerHTML = `name: ${currentUser.email}`;
    //     document.getElementById('role').innerHTML = `name: ${currentUser.getRole()}`;
    //     document.getElementById('password').innerHTML = `password: *******`;
    //     document.getElementById('password_cofirmation').innerHTML = `password_cofirmation: *******`;
    //   console.log('currentUser',currentUser)
    // })

