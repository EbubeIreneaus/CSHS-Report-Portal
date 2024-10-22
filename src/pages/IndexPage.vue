<script setup lang="ts"></script>

<template>


    <div class="mini-body">
      <q-btn flat class="navigate" to="/check-result"  noCaps>
        <p>Check Result</p>
      </q-btn>

      <q-btn flat class="navigate" no-caps to="/generate-result-epins">
        <p>Generate Result ePIN</p>
      </q-btn>
    </div>

</template>

<style lang="scss" scoped>


.mini-body {
  display: flex;
  width: 398px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: auto;

  .navigate {
    display: flex;
    height: 120px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 2px;
    background: rgba(33, 2, 140, 0.1);
    color: #000;

    &:hover{
      background-color: #4E3E81;
      color: white;
    }

    p {

      font-family: Raleway;
      font-size: 24px !important;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
    }
  }
}


@media (max-width: 480px) {

  .mini-body {
    width: 275px;
    gap: 24px;
    .navigate {
      display: flex;
      width: 275px;
      height: 100px;
      padding: 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 2px;
    }
    p{
      font-size: 20px !important;
    }
  }
}
</style>
