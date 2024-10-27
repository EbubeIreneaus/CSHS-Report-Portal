<script lang="ts" setup>
import { ref } from 'vue';
import { useStudentStore } from 'src/stores/Students';
import { QTableColumn } from 'quasar';

const srch = ref('');
const students = useStudentStore().students;

const StudentTableColumn: QTableColumn[] = [
  { name: 'serial', field: '', label: 'S/N', align: 'left' },
  { name: 'name', field: 'name', label: 'Name', align: 'left', sortable: true},
  { name: 'studentId', field: 'id', label: 'Student Id', align: 'left', sortable: true },
  { name: 'gender', field: 'gender', label: 'Gender', align: 'left', sortable: true },
  { name: 'age', field: 'age', label: 'Age', align: 'left', sortable: true },
  { name: 'contact', field: 'Contact', label: 'Contact', align: 'left' },
  { name: 'position', field: 'position', label: 'Position', align: 'left', sortable: true },
  { name: 'remark', field: 'remark', label: 'Remark', align: 'left' },
  { name: 'action', field: '', label: 'Other', align: 'left' },
];
</script>

<template>
  <div class="tw-mx-[100px]">
    <div class="tw-flex tw-justify-between tw-item-center tw-mb-10">
      <q-btn
        icon="add"
        label="Add New Student"
        color="accent"
        class="tw-px-[20px] tw-py-[10px] tw-rounded-sm"
        no-caps
      />
      <div class="tw-flex tw-border">
        <q-input
          type="search"
          v-model="srch"
          borderless
          placeholder="Enter Keyword"
          class="tw-px-2.5"
        />
        <q-btn icon="search" label="search" no-caps unelevated />
      </div>
    </div>

    <div>
      <q-table
        :columns="StudentTableColumn"
        :rows="students"
        row-key="id"
        :rows-per-page-options="[5, 10, 15, 20, 25, 50, 100]"
        flat
        bordered
        separator="cell"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="sn"> {{ props.rowIndex + 1 }} </q-td>
            <q-td key="name">{{ props.row.name }}</q-td>
            <q-td key="id">{{ props.row.id }}</q-td>
            <q-td key="gender"> {{ props.row.gender }}</q-td>
            <q-td key="age"> {{ props.row.age }} </q-td>
            <q-td key="contact">{{ props.row.contact }}</q-td>
            <q-td key="position">{{ props.row.position }}</q-td>
            <q-td key="remark" class="text-capitalize">
              {{ props.row.remark }}</q-td
            >
            <q-td key="action"><q-btn icon="more_vert" flat /></q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>
