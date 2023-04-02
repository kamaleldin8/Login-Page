<template>
  <div class="login-full-page flex justify-content-center align-items-center">
    <form method="POST" @submit.prevent="login">
      <div
        class="card flex flex-column align-items-center justify-content-center md:flex-row"
      >
        <div
          class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5"
        >
          <div>
            <img class="img-logo" :src="'../src/assets/imgs/' + imageName" />
          </div>
          <div class="email-wrapper flex flex-column align-items-start gap-2">
            <label class="font-medium">Email</label>
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
            <InputText
              id="password"
              type="password"
              class="w-full"
              placeholder="**********"
            />
          </div>
          <div
            class="flex justify-content-between w-full py-2"
            v-if="register_login"
          >
            <div class="remember-me">
              <checkbox v-model="checked" binary="true" />
              <label class="pl-2 font-normal">Remember me</label>
            </div>

            <div class="text-700">
              <a
                href="
              "
                style="text-decoration: none; color: black"
              >
                Forget password?
              </a>
            </div>
          </div>
          <Button
            type="submit"
            icon="pi pi-user"
            class="w-21rem border-round-xl"
            >{{ login_btn_text }}</Button
          >
          <div class="mr-auto text-xs">
            Don’t have an account?
            <span>
              <a href=""> request one here! </a>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const checked = ref(false);
const register_login = ref(false);
const login_btn_text = ref("Proceed to login");
const email = ref(null);
const imageName = ref("logo.svg");
const theme = ref("#594fc4");
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
    color: "black",
  },
  {
    id: 4,
    name: "Butt",
    email: "bames@gmail.com",
    provider: "carti",
    password: "4564",
    AD: true,
    color: "#52B1D9",
  },
];

function login() {
  // send email to API end point via get request and recieve account provider
  const account = data.find((item) => item.email === email.value);
  register_login.value = true;
  login_btn_text.value = "Sign In";

  if (account.AD) {
    imageName.value = `${account.provider}.png`;
    theme.value = account.color;
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
  border: 1px solid;
  border-color: v-bind(theme);
  border-radius: 5%;
}
.img-logo {
  width: 7em;
}
.w-full {
  width: 21em !important;
}
.w-full::placeholder {
  color: #ced4da;
  padding-left: 0.5em;
}
button {
  background-color: v-bind(theme);
  box-shadow: 0px 5.4px 10.8px rgba(0, 0, 0, 0.16);
}
button:hover {
  background-color: white !important;
  color: v-bind(theme) !important;
  border-color: v-bind(theme) !important;
  box-shadow: 0px 5.4px 10.8px rgba(0, 0, 0, 0.16);
}
</style>
