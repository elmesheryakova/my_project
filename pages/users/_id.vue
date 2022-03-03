<template>
  <div>
    {{ user.id }}
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {},
  }),
  async fetch() {
    const data = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
      )
    ).json()
    this.user = data
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
}
</script>
