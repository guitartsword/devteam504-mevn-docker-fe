<template>
  <div class="home">
    <ItemList :items="itemTransactions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import ItemList from '@/components/ItemList.vue'; // @ is an alias to /src
import { getItemTransactions, ItemTransactionModel } from './ItemTransactions.service';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
  },
  setup() {
    const itemTransactions = ref<ItemTransactionModel>([]);

    const getItems = async () => {
      itemTransactions.value = await getItemTransactions();
    };

    onBeforeMount(getItems);
    return {
      itemTransactions,
    };
  },
});
</script>
