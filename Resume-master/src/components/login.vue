<template>
  <div class="container">
    <div class="form-signin">
      <h2 class="form-signin-heading">Please login in</h2>
      <label for="inputEmail" class="sr-only">userId</label>
      <input type="text" v-model="form.userId" id="inputuser" class="form-control" placeholder="userId" >
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="form.password" id="inputPassword" class="form-control" placeholder="Password" >
      <div class="checkbox">
        <label class="rem">
          <input class="rem" type="checkbox" value="remember-me" @click="remember"> Remember me
        </label>
      </div>

      <button class="btn btn-lg btn-primary btn-block" @click="Login">Login in</button>
    </div>
  </div>
</template>
<script>
  // $.ajax({
  //   type: 'post',
  //   url: 'http://test.jessechiu.com/login ',
  //   // dataType:"jsonp",
  //   data: {
  //     "userId": 'chenxx',
  //     "password": 'chenxx8888'
  //   },
  //   success: function (data) {
  //     console.log(data);
  //   },
  //   error: function () {
  //     console.log('发送错误');

  //   }
  // })
  export default {
    data() {
      return {
        form: {
          userId: window.localStorage.userId||'',
          password:window.localStorage.password||''
        },
        state:false

      }
    },
    methods: {
      Login: function () {
        var qs = require('qs')
        console.log(qs)
        var instance = this.$axios.create({
          transformRequest: [function (data) {
            return qs.stringify(data, {
              arrayFormat: 'brackets'
            })
          }]
        })
        let that = this
        instance.post('http://test.jessechiu.com/login ', this.form).then((res) => {
          console.log(res.data)
          if (res.data.errorCode === -1) {
             that.$Message.info('请输入正确的密码和账号')
            return;
          } 
        that.$router.push({path:'/index/person'} )
          
        }).catch(function (err) {

          console.log(err)
        })
      },
      // Login1(){
      //    this.$router.push({path:'/index'} )
      // },
      remember:function(){
        this.state=!this.state
        if(this.state==true){
        let storage = window.localStorage
        storage.userId=this.form.userId
        storage.password=this.form.password
        console.log(storage.password)
        }else {
          window.localStorage.userId.clear()
          window.localStorage.password.clear()
        }
      }
      // this.$axios.post('http://test.jessechiu.com/login ', qs.stringify({
      //     userId: 'chenxx',
      //     password: 'chenxx8888'
      //   }), {
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      //       'Accept': '*/*'
      //     }
      //   })
      //   .then(function (res) {
      //     console.log(res.data)
      //   })
      //   .catch(function (err) {
      //     console.log(err)
      //   })

    },
    mounted(){
      // this.Login();
        }
     
  }

</script>

<style>
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background: url(../assets/images/3.jpg) no-repeat;
    color: red;
    background-size: cover;
  }
  .rem,.form-signin-heading {
    color: #f2f2f2;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }

  #inputuser {
    margin-bottom: 20px;
  }

  #inputuser,
  #inputPassword {
    background: rgba(45, 45, 45, .15);
    border: 1px solid rgba(255, 255, 255, .15);
    padding: 0 15px;
    border-radius: 6px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    color: #fff;
    -webkit-transition: all .2s;
  }

  #inputuser::-webkit-input-placeholder {
    color: #fff;
  }

  #inputPassword::-webkit-input-placeholder {
    color: #fff;
  }

</style>
