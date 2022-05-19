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

    <q-footer elevated>
        <q-tabs>
        <q-route-tab to='/' icon="list" label="To Do" />
        <q-route-tab to='/settings' icon="settings" label="Settings" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Navigation</q-item-label>
          <q-item
              v-for="nav in navs"
              :key="nav.id"
              :to= 'nav.to'
              exact
              clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>  
            <q-item-label>{{nav.label}}</q-item-label>
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
      navs: [
        {
          label: 'To Do',
          icon:'list',
          to: '/',

        },
         {
          label: 'Settings',
          icon:'settings',
          to: '/settings',

        },
        
      ]
    };
  },
};
</script>
