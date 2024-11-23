<script>
import LogoutButton from '../components/LogoutButton.vue';

export default {
  name: 'HomeView',
  components:{
    LogoutButton,
  },
  data() {
    return {};
  }
};
</script>

<template>
  <div class="home">
    <h3 class="home__title">¡Lo lograste!</h3>
    <p class="home__message">Gracias por probar el proyecto hasta este punto.</p>
    <LogoutButton class="home__logout-button" />
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #28a745;
$secondary-color: #6c757d;
$text-color: #333;
$button-color: #f44336;
$button-hover: darken($button-color, 10%);
$background-color: #f8f9fa;
$box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $background-color;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: $box-shadow;
  max-width: 500px;
  margin: 2rem auto;

  &__title {
    font-size: 1.8rem;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 1rem;
  }

  &__message {
    font-size: 1.2rem;
    color: $secondary-color;
    margin-bottom: 2rem;
  }

  &__logout-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: $button-color;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: $button-hover;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>