<template>
  <div class="login-full-page flex justify-content-center align-items-center">
    <form method="POST" @submit.prevent="login">
      <div class="card flex flex-column align-items-center justify-content-center md:flex-row">
        <div
          class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5"
        >
          <div>
            <img  class="img-logo" src="../assets/imgs/logo.svg" />
          </div>
          <div class="email-wrapper flex flex-column align-items-start gap-2">
            <label class='font-medium'>Email</label>
            <InputText
              id="username"
              type="email"
              class="w-full"
              v-model.trim="email"
              placeholder="example@domain.com"
              required
            ></InputText>
          </div>
          <div
            class="password-wrapper flex flex-column align-items-start gap-2"
            v-if="register_login"
          >
            <label class="font-medium">Password</label>
            <InputText id="password" type="password" class="w-full" 
            placeholder="**********"
            />
          </div>
          <div class="flex justify-content-between w-full py-2" v-if="register_login">
            <div class="remember-me">
              <checkbox v-model="checked" binary="true"/>
              <label class="pl-2 font-normal">Remember me</label>
            </div>

            <div class="text-700">
              <a href="
              " 
              style="text-decoration: none; color: black;"
              >
              Forget password ?
            </a></div>
          </div>
          <Button
            type="submit"
            icon="pi pi-user"
            class="w-21rem
            border-round-xl
            "
            >{{ login_btn_text }}</Button
          >
          <div class="mr-auto text-xs">
            Don’t have an account? <span>
              <a href="">
                request one here.
              </a>
            </span> 

          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const checked=ref(false);
let register_login = ref(false);
let login_btn_text = ref("Sign In");
let email = ref(null);
const data = [
  {
    id: 0,
    name: "kamal",
    email: "kamal@gmail.com",
    provider: "carti",
    password: "123",
    AD: false,
  },
  {
    id: 1,
    name: "omar",
    email: "omar@gmail.com",
    provider: "uams",
    password: "456",
    AD: false,
  },
  {
    id: 2,
    name: "amr",
    email: "amr@gmail.com",
    provider: "carti",
    password: "123",
    AD: false,
  },
  {
    id: 3,
    name: "James",
    email: "James@gmail.com",
    provider: "uams",
    password: "James",
    AD: true,
  },
  {
    id: 4,
    name: "Butt",
    email: "bames@gmail.com",
    provider: "carti",
    password: "4564",
    AD: false,
  },
];

function login() {
  // send email to API end point via get request and recieve account provider
  const account = data.filter((item) => item.email == email.value);
  console.log(account);

  if (account.AD) {
    register_login = false;
    login_btn_text.value = "Sign In";
  } else {
    register_login = true;
    login_btn_text.value = "Proceed to login";
  }
}
</script>
<style scoped>
.login-full-page {
  padding: 0;
  margin: 0;
  height: 100vh;
  background: #f5f5f5;
}
.card {
  width: 30rem;
  height: 30rem;
  background: #ffffff;
  border: 1px solid #594FC4;
  border-radius: 5%;
}
.img-logo{
  width: 7em;
}
.w-full{
  width: 21em !important;
}
.w-full::placeholder{
  color:#CED4DA;
  padding-left: .5em;
}
button{
  background-color: #594FC4;
  box-shadow: 0px 5.4px 10.8px rgba(0, 0, 0, 0.16);
}
</style>
