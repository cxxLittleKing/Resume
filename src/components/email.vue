 <template>

  <div >
      <form class="form-signin">
        <h2 class="form-signin-heading">Send me an email</h2>
        <Input v-model="form.name" icon="ios-arrow-back" placeholder="Name" ></Input>
        <Input v-model="form.email" icon="ios-email" placeholder="Email"></Input>
        <Input v-model="form.subject" icon="ios-book" placeholder="Subject"></Input>
        <Input v-model="form.message" type="textarea" :autosize="{minRows: 4,maxRows:7 }" placeholder="Message"></Input>
        <button @click="send" icon="ios-search" class="btn btn-lg btn-primary btn-block" >Send</button>
    <Modal
        v-model="modal6"
        title="Send email"
        :loading="loading"
        @on-ok="asyncOK">
        <p>点击确定后发送邮件</p>
    </Modal>
   </form>
    </div>
</template>
<script>

  export default {
    data() {
      return {
        form:{
        name: '',
        email:'',
        subject:'',
        message:''
        },
        modal6: false,
        loading: true
      }
    },
    methods:{
      send:function(){
        this.modal6=true
      },
      currentSend:function(){
        var qs = require('qs')
         var instance =this.$axios.create({
          transformRequest: [function (data) {
            return qs.stringify(data, {
              arrayFormat: 'brackets'
            })
          }]
        })
        let that=this
        instance.post('http://test.jessechiu.com/email ', this.form).then((res) =>{
          console.log(res.data)
          // that.$router.push('/index')
          console.log(this.form)
        }).catch(function (err) {
          console.log(err)
         
        })
      },
      asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                    this.$Message.success('发送成功')
                }, 2000);
               
                  this.currentSend()
            }
    }
  }

</script>
<style>

.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
input{
     width: 270px;
    height: 42px;
    margin-bottom: 25px;
    padding: 0 15px;
}
textarea{
    margin-bottom: 25px;
}
</style>

