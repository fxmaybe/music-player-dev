<template>
  <div id="app">
    <c-header></c-header>
    <c-tab></c-tab>
    <router-view/>
  </div>
</template>

<script>
import CHeader from '@/components/layout/CHeader';
import CTab from '@/components/layout/CTab';
export default {
  name: 'App',
  components: {
    CHeader,
    CTab
  }
}
</script>

<style>
</style>
