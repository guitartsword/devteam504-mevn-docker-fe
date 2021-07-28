<template>
  <div>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Fecha</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>
          <router-link :to="'/item/' + item.name">{{ item.name }}</router-link>

        </td>
        <td>{{ item.amount }}</td>
        <td>{{ item.createdAt.toLocaleString() }}</td>
      </tr>
    </table>
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
