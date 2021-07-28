<template>
  <div>
    <h1>{{$route.params.id}}</h1>
    En inventario: {{items.total}}
    <ItemList :items="items.transactions" />
    <NewItemForm :name="$route.params.id" @created="getItems()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import ItemList from '@/components/ItemList.vue';
import NewItemForm from '@/components/NewItemForm.vue';
import { getItemInventory, InventoryResponse } from './ItemTransactions.service';

export default defineComponent({
  name: 'ItemDetail',
  components: {
    ItemList,
    NewItemForm,
  },
  setup() {
    const items = ref<InventoryResponse>({
      transactions: [],
      total: 0,
    });
    const route = useRoute();

    const getItems = async () => {
      const data = await getItemInventory(route.params.id.toString());
      items.value = data;
    };

    onBeforeMount(getItems);
    return {
      items,
      getItems,
    };
  },
});

</script>
