<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Robbys ToDo App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
          <q-item
        clickable
       
    >
      <q-item-section
     
        avatar
      >
      <q-icon name="school" />
      </q-item-section>

      <q-item-section>  
        <q-item-label>Docs</q-item-label>
        <q-item-label caption>
          quasar.dev
        </q-item-label>
      </q-item-section>
    </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>



export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
