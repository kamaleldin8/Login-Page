<template>
  <div class="login-full-page flex justify-content-center align-items-center">
    <form method="POST" @submit.prevent="login">
      <div class="login-card card flex flex-column md:flex-row">
        <div
          class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5"
        >
          <div>
            <img src="../assets/imgs/logo.svg" />
          </div>
          <div class="flex flex-column align-items-start gap-2">
            <label>Email</label>
            <InputText
              id="username"
              type="email"
              class="w-full"
              v-model.trim="email"
              required
            ></InputText>
          </div>
          <div
            v-if="reg_login"
            class="flex flex-column align-items-start gap-2"
          >
            <label>Password</label>
            <InputText id="password" type="password" class="w-full" />
          </div>
          <div v-if="reg_login">
            <div class="remember-me">
              <checkbox />
              <label>Remember me</label>
            </div>
            <div class="bg-gray-300">Forget password ?</div>
          </div>
          <Button
            type="submit"
            icon="pi pi-user"
            class="w-10rem bg-indigo-500"
            >{{ login_btn_text }}</Button
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
let reg_login = ref(false);
let login_btn_text = ref("Proceed to login");
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
  const account = data.find((e) => e.email == email);
  console.log(account);
  if (account.AD) {
  } else {
    reg_login = true;
    login_btn_text = "Login";
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
.login-card {
  width: 400px;
  height: 400px;
  background: #ffffff;
  border-radius: 2%;
}
</style>
