<template>
  <div>
    <h3>Quote Added!!!</h3>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar"
      :style="{width: (quoteCount/maxQuotes)*100 + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{quoteCount}}/{{maxQuotes}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['quoteCount', 'maxQuotes']
}
</script>
