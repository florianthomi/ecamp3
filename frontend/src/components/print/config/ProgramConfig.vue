<template>
  <div>
    <e-select
      v-model="options.periods"
      :items="periods"
      :label="$tc('components.print.config.programConfig.periods')"
      multiple
      :filled="false"
    />
    <e-select
      v-model="options.categories"
      :items="categories"
      :label="$tc('components.print.config.programConfig.categories')"
      multiple
      :filled="false"
    />
    <e-checkbox
      v-model="options.dayOverview"
      :label="$tc('components.print.config.programConfig.dayOverview')"
    />
  </div>
</template>

<script>
export default {
  name: 'ProgramConfig',
  props: {
    value: { type: Object, required: true },
    camp: { type: Object, required: true },
  },
  computed: {
    options: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
    periods() {
      return this.camp.periods().items.map((p) => ({
        value: p._meta.self,
        text: p.description,
      }))
    },
    categories() {
      return this.camp.categories().items.map((c) => ({
        value: c._meta.self,
        text: c.short,
      }))
    },
  },
  defaultOptions() {
    return {
      periods: [],
      dayOverview: true,
      categories: [],
    }
  },
  design: {
    multiple: true,
  },
}
</script>
