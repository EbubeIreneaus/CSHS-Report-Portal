<!-- eslint-disable quotes -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue';
import { useQuasar, useTimeout } from 'quasar';
import { useRouter } from 'vue-router';

const { registerTimeout } = useTimeout();
const $q = useQuasar();
const isLoading = ref(false);
const router = useRouter();

const subjects = [
  'Mathematics',

  'English',

  'Physics',

  'Chemistry',

  'Biology',

  'Economics',

  'Literature',

  'History',
];

// Helper functions to generate grade, remark, and position

const r_form = reactive({
  name: 'Okigwe Ebube I',
  gender: 'Male',
  class: 'SS3B',
  term: 'First Term',
  total_obtainable_score: 0,
  total_obtained_score: 0,
  no_of_times_school_open: 0,
  no_of_times_present: 0,
  no_of_times_absecent: 0,
  position: 0,
  no_in_class: '',
  percentage: '',
  attentiveness: '',
  honesty: '',
  neatness: '',
  politeness: '',
  puntuality: '',
  confidence: '',
  obidience: '',
  teacher_comment: '',
  teacher_name_date_sign: '',
  principal_comment: '',
  principal_name_date_sign: '',
  status: 'Promoted',
  next_term_start: '',
  subjects: [
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
    {
      name: '',
      ca: '',
      exam: '',
      term3: '',
      term2: '',
      term1: '',
      session_average: '',
      grade: '',
      position: '',
      remark: '',
    },
  ],
});

function saveRecord() {
  $q.dialog({
    title: 'Confirmation',
    message:
      'I am sure this submitted result is correct, and meant for student: OKIGWE EBUBE IRENEAUS',
    cancel: true,
    persistent: true,
    color: 'accent',
    ok: "Yes I'M",
  }).onOk(() => {
    isLoading.value = true;
    registerTimeout(() => {
      isLoading.value = false;
      router.push('/teacher/uploadResult/students');
    }, 3000);
  });
}
onMounted(() => {
  let meta = document.querySelector('meta[name=viewport]');
  meta.setAttribute('content', '');
});

onBeforeMount(() => {
  let meta = document.querySelector('meta[name=viewport]');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
});
</script>

<template>
  <main class="tw-w-full tw-border tw-mx-auto nt">
    <section class="tw-w-[920px] tw-mx-auto tw-my-5" id="result-section">
      <div class="f-h">
        <img src="~assets/images/logo.png" alt="" />

        <div class="tw-flex-grow tw-w-full tw-text-center">
          <div class="nt tw-text-3xl a-c">Caros Standard High School</div>
          <div class="nt tw-text-2xl tw-my-2 a-c">Motto: Work and Pray</div>
          <p class="tw-text-lg">
            7/11, Odunaiya Abisoye Cresent, Papa, Asese, Ibafo, Ogun State
          </p>
          <br />
          <p class="tw-text-lg">
            08077768368 | 08134204038 | 08033557895 Email:
            carosstandardschoolibafo@gmail.com
          </p>
        </div>
        <img src="~assets/images/sailor.jpg" alt="" />
      </div>

      <table class="f-t">
        <tbody>
          <tr>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Name</p>
              <q-input
                v-model="r_form.name"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>

            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Gender</p>
              <q-select
                v-model="r_form.gender"
                borderless
                dense
                color="accent"
                class="tw-text-center nt tw-text-lg"
                :options="['Male', 'Female', 'Other']"
              />
            </td>

            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Class</p>
              <q-input
                v-model="r_form.class"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
                @blur="() => (r_form.class = r_form.class.toUpperCase())"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Term</p>
              <q-select
                v-model="r_form.term"
                borderless
                dense
                color="accent"
                class="tw-text-center nt tw-text-lg"
                :options="['First Term', 'Second Term', 'Third Term']"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Total obtainable Score</p>
              <q-input
                v-model="r_form.total_obtainable_score"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Total obtained Score</p>
              <q-input
                v-model="r_form.total_obtained_score"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
          </tr>
          <tr>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">
                No of times school opened
              </p>
              <q-input
                v-model="r_form.no_of_times_school_open"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No of times present</p>
              <q-input
                v-model="r_form.no_of_times_present"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No of times abscent</p>
              <q-input
                v-model="r_form.no_of_times_absecent"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No in class</p>
              <q-input
                v-model="r_form.no_in_class"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Position</p>
              <q-input
                v-model="r_form.position"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Percentage</p>
              <q-input
                v-model="r_form.percentage"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="text-center tw-font-semibold tw-text-3xl tw-mt-10 tw-mb-14">
        COGNITIVE DOMAIN
      </h2>

      <div class="tw-relative tw-mb-[60px]">
        <div class="text-center">
          <h2 class="text-h3 text-capitalize">Performance report</h2>
        </div>
        <table class="r-table">
          <tbody>
            <tr class="*:tw-px-2">
              <th class="tw-w-[150px] tw-text-xl tw-border">SUBJECT</th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">CA</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">3RD TERM</div>
                <div class="">100</div>
              </th>
              <th class="tw-border tw-w-[60px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">2ND TERM</div>
                <div class="">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">1ST TERM</div>
                <div class="">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">SESSION AVERAGE</div>
                <div class="">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="tw-mb-2">GRADE</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="tw-mb-2">SUBJ. POSITION</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="tw-mb-2">REMARK</div>
              </th>
            </tr>
            <tr class="r-c" v-for="(course, index) in 9" :key="index">
              <td>
                <q-select
                  v-model="r_form.subjects[index].name"
                  borderless
                  label="Subject"
                  dense
                  color="accent"
                  class="tw-text-center nt tw-text-lg"
                  :options="subjects"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].ca"
                  borderless
                  type="number"
                  min="0"
                  max="40"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  required
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].exam"
                  borderless
                  type="number"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  min="0"
                  max="100"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].term3"
                  borderless
                  type="number"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  min="0"
                  max="100"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].term2"
                  borderless
                  type="number"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  min="0"
                  max="100"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].term1"
                  borderless
                  type="number"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  min="0"
                  max="100"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].session_average"
                  borderless
                  type="number"
                  dense
                  placeholder="type here"
                  input-class="tw-text-center nt tw-text-lg"
                  min="0"
                  max="100"
                />
              </td>
              <td>
                <q-select
                  v-model="r_form.subjects[index].grade"
                  borderless
                  dense
                  label="Grade"
                  color="accent"
                  class="tw-text-center nt tw-text-lg"
                  :options="['A', 'B', 'C', 'D', 'E', 'F']"
                />
              </td>
              <td>
                <q-input
                  v-model="r_form.subjects[index].position"
                  borderless
                  dense
                  label="Position"
                  placeholder="1st"
                  input-class="tw-text-center nt tw-text-lg"
                />
              </td>
              <td>
                <q-select
                  v-model="r_form.subjects[index].remark"
                  borderless
                  dense
                  label="Remark"
                  color="accent"
                  class="tw-text-center nt tw-text-lg"
                  :options="[
                    'Excellent',
                    'V.Good',
                    'Credit',
                    'Pass',
                    'V.Poor',
                    'Fail',
                  ]"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 class="text-h4 text-center tw-mb-2">AFFECTIVE DOMAIN</h2>
        <table class="tw-w-full">
          <tr class="tw-text-xl *:tw-border *:tw-p-3">
            <th>Attentiveness</th>
            <th>Honesty</th>
            <th>Neatness</th>
            <th>Politeness</th>
            <th>Punctuality</th>
            <th>Confidence</th>
            <th>Obiedence</th>
          </tr>
          <tr class="tw-text-xl *:tw-border *:tw-p-3 text-center">
            <td>
              <q-input
                v-model="r_form.attentiveness"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.honesty"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.neatness"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.politeness"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.puntuality"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.confidence"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
            <td>
              <q-input
                v-model="r_form.obidience"
                borderless
                dense
                placeholder="type here"
                input-class="tw-text-center nt tw-text-lg"
              />
            </td>
          </tr>
        </table>
      </div>

      <div class="tw-py-10 tw-mt-12 tw-mb-10">
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-3 tw-items-end">
          <p class="tw-col-span-1">Class Teacher’s comment:</p>
          <div class="tw-col-span-4">
            <q-input
              v-model="r_form.teacher_comment"
              borderless
              dense
              placeholder="type here"
              input-class="nt tw-text-lg"
              class="tw-border-b tw-border-black"
            />
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-7 tw-items-end">
          <p class="tw-col-span-1">Name Date & Sign:</p>
          <div class="tw-col-span-4">
            <q-input
              v-model="r_form.teacher_name_date_sign"
              borderless
              dense
              placeholder="type here"
              input-class="nt tw-text-lg"
              class="tw-border-b tw-border-black"
            />
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-3 tw-items-end">
          <p class="tw-col-span-1">Principal's Comment:</p>
          <div class="tw-col-span-4">
            <q-input
              v-model="r_form.principal_comment"
              borderless
              dense
              placeholder="type here"
              input-class="nt tw-text-lg"
              class="tw-border-b tw-border-black"
            />
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt tw-items-end">
          <p class="tw-col-span-1">Name Date & Sign:</p>
          <div class="tw-col-span-4">
            <q-input
              v-model="r_form.principal_name_date_sign"
              borderless
              dense
              placeholder="type here"
              input-class="nt tw-text-lg"
              class="tw-border-b tw-border-black"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <span>Status: </span>
          <q-select
            v-model="r_form.status"
            borderless
            dense
            color="accent"
            class="tw-text-center nt tw-text-lg tw-inline-block text-weight-bold"
            :options="['Promoted', 'Repeated', 'None']"
          />
        </div>
        <div>
          <span>Next Term Begin: </span>
          <q-input
            type="date"
            v-model="r_form.next_term_start"
            borderless
            class="tw-inline-block tw-w-40 tw-mx-2 tw-font-bold"
          />
        </div>
      </div>

      <div class="tw-flex tw-justify-center">
        <q-btn
          label="Save Record"
          color="accent"
          @click="saveRecord"
          :loading="isLoading"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.nt {
  color: #000;
  font-family: Raleway;
  font-style: normal;
  font-weight: 400;
}
.a-c {
  color: $accent;
}

.lhs {
  line-height: 14px;
}

.r-c {
  font-weight: 700;
  text-align: center !important;

  td {
    border: 1px solid rgb(0, 0, 0, 0.3);
    padding: 7px;
  }
}

section {
  .f-h {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;

    img:first-child {
      width: 85.727px;
      height: 92px;
      object-fit: cover;
      object-position: 74% 50%;
      flex-shrink: 0;
    }

    img:last-child {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      flex-shrink: 0;
    }
  }
  .f-t {
    tr,
    td {
      border: 1px solid rgb(0, 0, 0, 0.3);
    }
    td {
      width: calc(100% / 6);
      padding: 10px 5px;
    }
  }
  .r-table {
    .ang90 {
      display: inline-block;
      transform: rotate(90deg);
    }
  }
}
</style>
