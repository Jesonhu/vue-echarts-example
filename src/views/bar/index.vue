<template>
  <div>
    <h1>柱状图</h1>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: config.routerNameMap.bar
}
</script>