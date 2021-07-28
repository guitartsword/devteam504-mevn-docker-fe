<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="item name">Nombre</label>
        <input type="text" name="item name" v-model="formName">
      </div>
      <div>
        <label for="item amount">Cantidad</label>
        <input type="text" name="item amount" v-model="amount">
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { createItemTransaction, ItemTransactionModel } from '@/views/ItemTransactions/ItemTransactions.service';

export default defineComponent({
  name: 'ItemList',
  props: {
    name: String,
    items: {
      type: Array as PropType<ItemTransactionModel[]>,
    },
  },
  setup(props) {
    return {
      formName: ref(props.name || ''),
      amount: ref(0),
    };
  },
  methods: {
    async handleSubmit() {
      if (this.amount === 0) {
        return;
      }
      await createItemTransaction({
        name: this.formName,
        amount: this.amount,
      });
      this.$emit('created');
    },
  },
});
</script>
