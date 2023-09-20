<template> 
    <div>
      <img src="../../assets/login-back.png" class="login-back">
    </div>
   <div class="loginAcount">
     <h2 class="text-center" style="margin-bottom: 20px;">欢迎登录 Interface Management</h2>
     <el-form :model="form" :rules="formRef" ref="loginFormRef">
        <el-form-item label="登录账号" prop="acount">
           <el-input v-model="form.acount" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
           <el-input v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button style="margin-left: 80px;"  @click="submit(loginFormRef)">确认</el-button>
        <el-button  @click="register">注册账号</el-button>
        <a style="margin-left: 80px;">忘记密码</a>
     </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref, reactive } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()
const register = (event : any) => {
  router.replace({
    path: 'register'
   })
}

const form = reactive({
  acount: '' ,
  password: ''
})

const validatorAcount = (rule:any,value:string,callback: any) =>{
  if (!value) return callback('请输入账号')

  return callback
}

const validatorPassword = (rule: any, value: string, callback: any) => {
  if (!value) return callback('请输入密码')

  return callback
}
const formRef = ref({
  acount: [{
    required: true,
    message:'账号不能为空',
    trigger: 'blur'
  },
    {
      validator: validatorAcount,
      trigger:'blur'
  }
],
  password:[{
    required: true,
    message:'密码不能为空',
    trigger: 'blur'
},
    {
      validator: validatorPassword,
      trigger:'blur'
  }
]
})
const loginFormRef = ref(null)

const submit = (loginFormRef: any) => {
  loginFormRef.validate((valid: any) => {
    if (!valid) return ElMessage.error('请填写登录信息进行登录操作')
     })
}



</script>
<style scoped>
.loginAcount{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
  flex-direction: column;

}
 
.login-back{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

</style>
