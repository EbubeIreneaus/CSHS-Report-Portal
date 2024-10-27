<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup>
import html2pdf from 'html2pdf.js';
import { onBeforeMount, onMounted } from 'vue';

const studentScores = [
  {
    subject: 'Mathematics',
    test_score: Math.floor(Math.random() * 41), // 0 - 40
    exam_score: Math.floor(Math.random() * 61), // 0 - 70
    third_term_score: Math.floor(Math.random() * 101), // 0 - 100
    second_term_score: Math.floor(Math.random() * 101), // 0 - 100
    first_term_score: Math.floor(Math.random() * 101), // 0 - 100
    session_average: Math.floor(Math.random() * 101), // 0 - 100
    grade: getGrade(Math.floor(Math.random() * 101)), // Grade based on the average
    sub_position: getRandomPosition(), // 1st - 13th
    remark: getRemark(Math.floor(Math.random() * 101)), // Remark based on score
  },
  {
    subject: 'English',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Physics',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Chemistry',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Biology',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Economics',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Geography',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'Literature',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
  {
    subject: 'History',
    test_score: Math.floor(Math.random() * 41),
    exam_score: Math.floor(Math.random() * 61),
    third_term_score: Math.floor(Math.random() * 101),
    second_term_score: Math.floor(Math.random() * 101),
    first_term_score: Math.floor(Math.random() * 101),
    session_average: Math.floor(Math.random() * 101),
    grade: getGrade(Math.floor(Math.random() * 101)),
    sub_position: getRandomPosition(),
    remark: getRemark(Math.floor(Math.random() * 101)),
  },
];

// Helper functions to generate grade, remark, and position
function getGrade(score) {
  if (score >= 70) return 'A';
  if (score >= 60) return 'B';
  if (score >= 50) return 'C';
  if (score >= 45) return 'D';
  if (score >= 40) return 'E';
  return 'F';
}

function getRemark(score) {
  if (score >= 70) return 'Excellent';
  if (score >= 60) return 'V.GOOD';
  if (score >= 50) return 'Good';
  if (score >= 45) return 'Pass';
  return 'Fail';
}

function getRandomPosition() {
  const positions = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

function downloadResult() {
  const resultSec = document.querySelector('#result-section');
  var opt = {
    margin: 1,
    filename: 'caro-Standard-high-school-result-demo.pdf',
    jsPDF: { unit: 'in', format: 'A2', orientation: 'portrait' },
    pagebreak: { mode: 'avoid-all', before: '#page2el' },
    html2canvas: { scale: 0.9, useCORS: true },
  };

  html2pdf().set(opt).from(resultSec).save();
}

function printResult(){
  window.print()
}

onMounted(()=>{
  let meta = document.querySelector('meta[name=viewport]')
  meta.setAttribute('content', '')
})

onBeforeMount(()=>{
  let meta = document.querySelector('meta[name=viewport]')
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0')
})
</script>

<template>
  <main class="tw-w-full tw-border tw-mx-auto nt">
    <div
      class="tw-flex tw-justify-between tw-items-center tw-py-[24px] tw-px-[70px] header"
      style="align-items: flex-start"
    >
      <div class="nt tw-text-lg">
        For help/ support contact us 08144091443,
        danielolajireolamilekan2020@gmail.com
      </div>

      <div>
        <button
          class="tw-w-[141px] tw-h-[50px] tw-p-[10px] tw-bg-[#2102BC]/10 tw-rounded-[2px] nt !tw-text-xl tw-me-[18px] hover:tw-bg-slate-100"
          @click="downloadResult"
        >
          Download
        </button>
        <button
          class="tw-w-[141px] tw-h-[50px] tw-p-[10px] tw-bg-[#2102BC]/10 tw-rounded-[2px] nt !tw-text-xl tw-me-[16px] hover:tw-bg-slate-100"
          @click="printResult"
        >
          Print
        </button>
        <button
          class="tw-w-[141px] tw-h-[50px] tw-p-[10px] tw-bg-[#2102BC]/10 tw-rounded-[2px] nt !tw-text-xl"
        >
          Share
        </button>
      </div>
    </div>

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
              <h2 class="tw-text-lg nt">Olajire Daniel</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Gender</p>
              <h2 class="tw-text-lg nt">Male</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Class</p>
              <h2 class="tw-text-lg nt">SS3B</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Term</p>
              <h2 class="tw-text-lg nt">First Term</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Total obtainable Score</p>
              <h2 class="tw-text-lg nt">1600.00</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Total obtained Score</p>
              <h2 class="tw-text-lg nt">928.82</h2>
            </td>
          </tr>
          <tr>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">
                No of times school opened
              </p>
              <h2 class="tw-text-lg nt">217</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No of times present</p>
              <h2 class="tw-text-lg nt">214</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No of times abscent</p>
              <h2 class="tw-text-lg nt">07</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">No in class</p>
              <h2 class="tw-text-lg nt">23 of 30</h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Position</p>
              <h2 class="tw-text-lg nt">12<sup>th</sup></h2>
            </td>
            <td class="tw-text-center tw-font-medium tw-text-black nt">
              <p class="tw-text-sm tw-font-semibold">Percentage</p>
              <h2 class="tw-text-lg nt">67%</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="text-center tw-font-semibold tw-text-3xl tw-my-10">
        COGNITIVE DOMAIN
      </h2>

      <div class="tw-relative tw-mb-[60px]">
        <div
          class="tw-absolute tw-right-0 tw-bottom-0 tw-h-full tw-text-center rotated-text"
        >
          <h2 class="text-h3 text-capitalize">Performance report</h2>
        </div>
        <table class="r-table">
          <tbody>
            <tr>
              <th class="tw-w-[150px] tw-text-xl tw-border">SUBJECT</th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">CA</div>
                <div class="text-left">40</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">EXAM</div>
                <div class="text-left">60</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">3RD TERM</div>
                <div class="text-left">100</div>
              </th>
              <th class="tw-border tw-w-[60px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">2ND TERM</div>
                <div class="text-left">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">1ST TERM</div>
                <div class="text-left">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">SESSION AVERAGE</div>
                <div class="text-left">100</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">GRADE</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">SUBJ.POSITION</div>
              </th>
              <th class="tw-border tw-w-[80px] tw-h-[150px] tw-text-lg">
                <div class="rotated-text tw-mb-2">REMARK</div>
              </th>
            </tr>
            <tr class="r-c" v-for="st in studentScores" :key="st.subject">
              <td>{{ st.subject }}</td>
              <td>{{ st.test_score }}</td>
              <td>{{ st.exam_score }}</td>
              <td>{{ st.third_term_score }}</td>
              <td>{{ st.second_term_score }}</td>
              <td>{{ st.first_term_score }}</td>
              <td>{{ st.session_average }}</td>
              <td>{{ getGrade(st.session_average) }}</td>
              <td>{{ st.sub_position }}</td>
              <td>{{ getRemark(st.session_average) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table class="tw-w-full">
          <h2 class="text-h4 text-center tw-mb-2">AFFECTIVE DOMAIN</h2>
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
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </table>
      </div>

      <div class="tw-py-10 tw-mt-12 tw-mb-10">
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-3">
          <p class="tw-col-span-1">Class Teacher’s comment:</p>
          <div class="tw-col-span-4">
            <div
              class="tw-h-full tw-border-0 tw-border-b tw-border-black"
            ></div>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-7">
          <p class="tw-col-span-1">Name Date & Sign:</p>
          <div class="tw-col-span-4">
            <div
              class="tw-h-full tw-border-0 tw-border-b tw-border-black"
            ></div>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt tw-mb-3">
          <p class="tw-col-span-1">Principal's Comment:</p>
          <div class="tw-col-span-4">
            <div
              class="tw-h-full tw-border-0 tw-border-b tw-border-black"
            ></div>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-5 nt">
          <p class="tw-col-span-1">Name Date & Sign:</p>
          <div class="tw-col-span-4">
            <div
              class="tw-h-full tw-border-0 tw-border-b tw-border-black"
            ></div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span>Status: </span>
          <span class="tw-text-lg tw-font-semibold">Promoted</span>
        </div>
        <div>
          <span>Next Term Begin: </span>
          <span class="tw-text-lg">Dec 12, 2024</span>
        </div>
      </div>

      <div class="tw-flex tw-justify-center">
        <div class="-tw-mt-20">
          <q-img
            src="~assets/images/verified.png"
            width="100px"
            class="tw-block tw-mx-auto tw-mb-2"
          />
          <p class="tw-text-xl tw-font-bold">School Approved</p>
        </div>
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
.rotated-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
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
    tbody {
    }
  }

}


@media print{
    .header{
      display: none;
    }
  }
</style>
