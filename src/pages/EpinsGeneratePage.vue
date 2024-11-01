<script lang="ts" setup>
import { reactive } from 'vue';
import { useQuasar, QSpinnerFacebook, useTimeout } from 'quasar';
import { useRouter } from 'vue-router';
import { useActivityStore } from 'src/stores/acivity';

const $q = useQuasar();
const s_options = ['2020/2021', '2021/2023', '2022/2023', '2023/2024']; //session options
const { registerTimeout } = useTimeout();
const router = useRouter()

const form = reactive({
  session: 'select',
  term: 'First',
  level: null,
  email: 'danielolajireolamilekan2020@gmail.com',
  phone: '08061982520',
});

function generate() {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'accent',
    spinnerSize: 140,
    // backgroundColor: 'purple',
    message: 'Generating ePIN is in progress. Hang on...',
    messageColor: 'accent',

  });

  registerTimeout(() => {
    $q.loading.hide();
    useActivityStore().is_ePin_generated = true
    $q.dialog({
      title: 'ePIN Generated Successfully',
      message: 'Would you like to return to homepage',
      color: 'accent',
      cancel: true,
      persistent: true,
    })
      .onOk(() => {
        return router.push('/')
      });
  }, 4000);
}
</script>

<template>
  <form class="main" @submit.prevent="generate">
    <p>Result Access Pin Generation</p>
    <section>
      <div class="main-cont">
        <div class="each tw-w-[277px] md:tw-w-[350px] tw-justify-between">
          <p>Session</p>
          <q-select
            v-model="form.session"
            :options="s_options"
            borderless
            class="tw-border tw-w-[127px] tw-px-[16px] select-input"
            required
          />
        </div>

        <div
          class="each tw-gap-[110px] md:tw-gap-0 md:tw-w-[390px] md:tw-justify-between"
        >
          <p>Level</p>
          <q-select
            v-model="form.level"
            borderless
            class="tw-border tw-w-[143px] md:tw-w-[163px] tw-px-[16px]"
            required
            :options="['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3']"
            color="black"
          />
        </div>

        <div class="each tw-w-[274px] md:tw-w-[350px] tw-justify-between">
          <p>Term</p>
          <q-select
            v-model="form.term"
            :options="['First', 'Second', 'Third']"
            color="accent"
            borderless
            class="tw-border tw-w-[123px] tw-px-[16px] select-input"
            required
          />
        </div>

        <div class="each tw-self-stretch tw-gap-[32px] md:!tw-gap-[57px]">
          <p class="v">Access Pin Fee:</p>
          <p class="vl">N0.00</p>
        </div>
        <div class="each tw-self-stretch !tw-gap-[32px] md:!tw-gap-[57px]">
          <p class="v">System Charges</p>
          <p class="vl">N0.00</p>
        </div>

        <div class="each tw-self-stretch tw-gap-[32px] md:!tw-gap-[57px]">
          <p class="v">Bank Charges</p>
          <p class="vl">N0.00</p>
        </div>
        <div class="each tw-self-stretch tw-gap-[32px] md:!tw-gap-[57px]">
          <p class="v">Total Amount</p>
          <p class="vl">N0.00</p>
        </div>

        <div
          class="each md:tw-w-[362px] md:tw-justify-between tw-gap-[35px] md:tw-gap-0"
        >
          <p>Phone number:</p>
          <q-input
            v-model="form.phone"
            borderless
            class="tw-border tw-w-[137px] tw-px-[16px]"
            required
          />
        </div>

        <div
          class="each tw-self-stretch md:tw-justify-between tw-gap-[104px] md:tw-gap-0"
        >
          <p>Email</p>
          <q-input
            v-model="form.email"
            borderless
            class="tw-border md:tw-w-[340px] tw-px-[16px] email-input"
            required
          />
        </div>
      </div>
    </section>
    <p class="p2">
      Note: Access to result is completely free however you will pay system
      charges for the processing and generation of the result ePIN
    </p>
    <p class="p3">
      Paystack payment gateway is been used for the system charges payment 
    </p>

    <q-btn no-caps flat label="next" class="next-btn" type="subject" />
  </form>
</template>

<style lang="scss" scoped>
.main {
  margin: 0 100px;
  max-width: 979px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  p:first-child {
    color: #000;
    font-family: Raleway;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }

  .p2 .p3 {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    align-self: stretch;
  }

  .p2 {
    color: #000;
    font-size: 16px;
  }

  .p3 {
    color: $accent;
    font-size: 20px;
  }

  .next-btn {
    width: 104px;
    background-color: $accent;
    color: #fff;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    border-radius: 2px;
  }
}

section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  .main-cont {
    display: flex;
    max-width: 567px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .each {
      display: flex;
      align-items: center;

      p {
        color: #000;
        font-family: Raleway;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
      }

      .v {
        line-height: 25px !important;
        width: 170px;
      }

      .vl {
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
      }

      .email-input {
        color: #000;
        font-family: Raleway;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
      }

      .select-input {
        color: #000;
        font-family: Raleway;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
      }
    }
  }
}

@media (max-width: 480px) {
  .main {
    margin: 0px 0px !important;
    padding: 0 20px;
    max-width: 100vw;

    p:first-child {
      font-size: 20px;
    }

    .p2 {
      font-size: 14px;
    }

    .p3 {
      font-size: 16px;
    }
  }

  .section {
    .main-cont {
      gap: 24px;

      .each {
        p {
          font-size: 16px;
        }

        .v {
          font-size: 16px;
          line-height: 25px;
          width: 124px;
        }

        .vl {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
