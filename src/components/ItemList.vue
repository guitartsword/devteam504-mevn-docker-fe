<template>
  <div>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Fecha</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.date.toLocaleString() }}</td>
      </tr>
    </table>
    <ul>
      <li >
        {{ item.name }} {{ item.amount }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ItemTransactionModel } from '@/views/ItemTransactions/ItemTransactions.service';

export default defineComponent({
  name: 'ItemList',
  props: {
    items: {
      type: Array as PropType<ItemTransactionModel[]>,
    },
  },
});
</script>
