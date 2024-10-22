<script lang="ts" setup></script>

<template>
  <main>
    <p class="rs">Result Selection</p>
    <div class="s_subcomponent">
      <div class="form ">
        <div class="tw-flex tw-w-[274px] sm:tw-w-[350px] tw-justify-between tw-items-center">
          <label>Session</label>
          <select class="tw-outline-none tw-border tw-px-1 tw-py-1.5 tw-w-[127px]">
            <option>-----select--------</option>
          </select>
        </div>

        <div class="tw-flex sm:tw-w-[390px] sm:tw-justify-between tw-items-center tw-gap-[110px] sm:tw-gap-0">
          <label>Level</label>
          <input
            type="text"
            class="tw-w-[143px] sm:tw-w-[163px] tw-border tw-outline-none tw-px-1 tw-py-1.5"
          />
        </div>

        <div class="tw-flex tw-w-[274px] sm:tw-w-[350px] tw-justify-between tw-items-center">
          <label>Term</label>
          <select class="tw-outline-none tw-border tw-px-4 tw-py-1.5 tw-w-[124px]">
            <option>-----select--------</option>
          </select>
        </div>
        <div class="tw-flex tw-w-full sm:tw-w-[507px] tw-justify-between tw-items-center">
          <label>Result PIn</label>
          <input
            type="text"
            class="tw-w[184px] sm:tw-w-[281px] tw-border tw-outline-none tw-px-[16px] tw-py-1.5 tw-shrink-0"
          />
        </div>
      </div>

      <p class="iaf">
        You can now check all your previous level/session results. All results
        required Result Access PIN. Result Access PINs are not transferable and
        can only be valid for maximum of three successful times. Results
        requires your department approval before you can access it. You can
        click <router-link to="/" class="tw-underline">here</router-link> to
        generate Result PIN now
      </p>

      <button
        class="tw-w-[104px] tw-p-3 tw-bg-[#15015A] tw-rounded-[2px] text-white"
      >
        submit
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin: 25px 100px;

  .rs {
    color: #000;
    font-family: Raleway;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }
  .s_subcomponent {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
  }

  .form {
    display: flex;
    max-width: 567px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    label {
      color: #000;
      font-family: Raleway;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
    }

    .iaf {
      color: #000;
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
    }
  }
  button {
    color: #fff;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
}

@media (max-width: 480px){
  main{
    margin: 25px auto;
    padding: 0 20px;

    .s_subcomponent{

      .form{
        width: 337px;

        label{
          font-size: 16px;
        }
      }
    }
  }
}
</style>
