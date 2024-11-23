<template>
  <div>
    <button @click="handleLogout" class="logout__button">Cerrar sesión</button>
  </div>
</template>

<script>
import { logout } from '@/auth';

export default {
  name: 'LogoutButton',
  data() {
    return {};
  },
  methods: {
    async handleLogout() {
      try {
        await logout(); 
        this.$router.push('/login');
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logout__button {
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>