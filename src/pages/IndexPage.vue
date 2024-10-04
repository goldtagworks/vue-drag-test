<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card>
            <q-card-section>
                <q-list bordered separator>
                    <VueDraggable v-model="list1" :animation="150" group="people" @update="onUpdate" @add="onAdd" @remove="remove">
                        <q-item clickable v-ripple v-for="item in list1" :key="item.id" @click="onClicked()">
                            <q-item-section>
                                <q-item-label>{{ item.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </VueDraggable>
                </q-list>
            </q-card-section>
        </q-card>

        <q-card>
            <q-card-section>
                <q-list bordered separator>
                    <VueDraggable v-model="list2" :animation="150" handle=".handle" group="people" @update="onUpdate" @add="onAdd" @remove="remove">
                        <q-item clickable v-ripple v-for="item in list2" :key="item.id">
                            <q-item-section side>
                                <q-icon name="drag_handle" color="green" class="handle" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ item.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </VueDraggable>
                </q-list>
            </q-card-section>
        </q-card>
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

function onClicked() {
    alert();
}
</script>
