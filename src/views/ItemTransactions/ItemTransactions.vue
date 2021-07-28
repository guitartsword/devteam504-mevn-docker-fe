<template>
  <div class="home">
    <NewItemForm @created="getItems()" />
    <ItemList :items="itemTransactions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
import ItemList from '@/components/ItemList.vue'; // @ is an alias to /src
import NewItemForm from '@/components/NewItemForm.vue';
import { getItemTransactions, ParsedItemTransactionModel } from './ItemTransactions.service';

export default defineComponent({
  name: 'Home',
  components: {
    ItemList,
    NewItemForm,
  },
  setup() {
    const itemTransactions = ref<ParsedItemTransactionModel[]>([]);

    const getItems = async () => {
      itemTransactions.value = await getItemTransactions();
    };

    onBeforeMount(getItems);
    return {
      itemTransactions,
      getItems,
    };
  },
});
</script>
