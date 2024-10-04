<template>
    <div class="flex">
        <VueDraggable class="q-pa-md q-ma-md bg-brown-2" v-model="list1" :animation="animation" ghostClass="ghost" group="people" @update="onUpdate" @add="onAdd" @remove="remove">
            <div v-for="item in list1" :key="item.id" class="q-pa-md q-ma-md bg-brown-8 text-grey-1">
                {{ item.name }}
            </div>
        </VueDraggable>
        <VueDraggable class="q-pa-md q-ma-md bg-brown-2" v-model="list2" :animation="animation" group="people" ghostClass="ghost" @update="onUpdate" @add="onAdd" @remove="remove">
            <div v-for="item in list2" :key="item.id" class="q-pa-md q-ma-md bg-brown-8 text-grey-1">
                {{ item.name }}
            </div>
        </VueDraggable>
    </div>
    <div class="flex justify-between">
        <preview-list :list="list1" />
        <preview-list :list="list2" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';

// https://vue-draggable-plus.pages.dev/

const animation = ref<number>(150);

const list1 = ref([
    {
        name: 'Joao',
        id: '1'
    },
    {
        name: 'Jean',
        id: '2'
    },
    {
        name: 'Johanna',
        id: '3'
    },
    {
        name: 'Juan',
        id: '4'
    }
]);
const list2 = ref(
    list1.value.map((item) => ({
        name: `${item.name}-2`,
        id: `${item.id}-2`
    }))
);
function onUpdate() {
    console.log('update');
}
function onAdd() {
    console.log('add');
}
function remove() {
    console.log('remove');
}
</script>
