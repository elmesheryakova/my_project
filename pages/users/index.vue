<template>
  <div>
    <div v-for="(item, idx) in users" :key="idx">
      <div class="users">
        <nuxt-link
          no-prefetch
          :to="{ name: 'users-id', params: { id: item.id } }"
        >
          <h5>
            {{ item.name }}
          </h5></nuxt-link
        >
        <p>{{ item.phone }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    users: [],
  }),
  async fetch() {
    const data = await (
      await fetch('https://jsonplaceholder.typicode.com/users/')
    ).json()

    this.users = data
  },
}
</script>
