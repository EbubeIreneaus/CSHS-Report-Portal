<script lang="ts" setup>
import { reactive } from 'vue';

const user = reactive({
  id: null,
});
</script>

<template>
  <div class="tw-bg-primary tw-w-full tw-flex tw-justify-center">
    <div class="main">
      <div class="tw-w-full">
      <img src="~assets/images/logo.png" class="school-logo" />
      </div>
      <p class="school-title">Caros Standard High School</p>
      <div class="content">
        <form>
          <div class="inputs-container">
            <div class="tw-w-full input-cont tw-border">
              <label for="id" class="input-label">Staff / Student Id</label>
              <q-input
                v-model="user.id"
                standout
                :borderless="true"
                type="text"
                class="input"
                id="id"
              />
            </div>

            <div class="tw-w-full input-cont tw-border">
              <label for="id" class="input-label">Password</label>
              <q-input
                v-model="user.id"
                standout
                :borderless="true"
                type="password"
                class="input"
                id="id"
              />
            </div>

            <q-btn label="Login" class="login-btn" color="accent" />

            <p class="fg-pass-text">Forgotten Password? Click here to reset</p>
          </div>
        </form>

        <div class="mini-bottom-cont">
          <p class="tw-text-[16px]">NEW STUDENT</p>
          <p class="tw-text-[14px]">Entrance Examination Result</p>
          <p class="tw-text-[12px]">Enter ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  width: 532px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
  margin-top: 100px;
}

.school-logo {
  max-width: 85.73px;
  height: 92px;
  margin: auto;
  object-fit: cover;
  object-position: 75% 50%;
}

.school-title {
  color: accent;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 100% */
  text-align: center;
}
.content {
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  align-self: stretch;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  align-self: stretch;
}
.inputs-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}
.inputs-container .input-cont {
  flex-shrink: 0;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #bab2b2;

  outline: none !important;
}
.input-cont .input-label {
  display: block;
  max-width: fit-content;
  margin-top: -10px;
  background-color: $primary;
  margin-left: 10px;
  color: #000;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.input-cont .input {
  // background-color: transparent !important;
  padding: 0 13px;
}
.login-btn {
  width: 100%;
  height: 64px;
  padding: 10px;
  border-radius: 2px;
}

.fg-pass-text {
  color: #000;
  text-align: center;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  align-self: stretch;
}
.mini-bottom-cont {
  display: flex;
  width: 330px;
  height: 90px;
  padding: 16px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  background: $primary;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
}

.mini-bottom-cont .p {
  color: #000;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

@media (max-width: 480px){
  .main{
    width: 312px;
    margin-top: 60px;
  }
  .school-title{
    font-size: 20px;
  }
}
</style>
