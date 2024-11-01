<script lang="ts" setup>
import { ref } from 'vue';
import { useStudentStore } from 'src/stores/Students';

const srch = ref('');
const students = useStudentStore().students;
const pag = ref(1);
</script>

<template>
  <div class="md:tw-mx-[100px] tw-mx-5">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-16">
      <p class="tw-text-black tw-font-medium md:tw-text-2xl tw-text-base">
        Student Mode
      </p>
      <div class="tw-flex tw-border">
        <q-input
          type="search"
          v-model="srch"
          borderless
          placeholder="Enter Keyword"
          class="tw-px-2.5 tw-w-32 md:tw-w-64"
        />
        <q-btn
          icon="search"
          :label="$q.screen.width > 480 ? 'search' : ''"
          no-caps
          unelevated
        />
      </div>
    </div>

    <div>
      <div class="tw-flex tw-flex-col tw-gap-6">
        <div
          class="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-[40px] tw-p-5 tw-rounded tw-bg-[#E9E6F2]"
          v-for="(s, index) in students"
          :key="s.id"
        >
          <p class="tw-text-xl tw-font-bold text-accent">
            {{ index + 1 }} . {{ s.name }}
          </p>
          <q-btn label="view details" no-caps color="accent" />
        </div>
        <div class="tw-flex tw-justify-end">
          <q-pagination
            :max="12"
            :max-pages="7"
            v-model="pag"
            color="accent"
            direction-links
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Inter, arial;
}
</style>
