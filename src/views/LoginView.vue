<template>
  <div class="login">
    <h2 class="login__title">inicio de sesion</h2>
    <input v-model="email" type="email" class="login__input login__input--email" placeholder="Correo Electronico">
    <input v-model="password" type="password" class="login__input login__input--password" placeholder="Contraseña">
    <button @click="signIn" class="login__button">iniciar sesion</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, auth } from '@/auth';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signIn() {
      try {
        const { email, password } = this;
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log('usuario autenticado: ',user);
        this.$router.push('/');
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        if (error.code === 'auth/invalid-credential') {
          this.$router.push('/signUp');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #007bff;
$primary-hover: darken($primary-color, 10%);
$input-border: #ccc;
$input-focus: $primary-color;
$error-color: #ff4d4d;

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;

  &__title {
    font-size: 1.5rem;
    color: $primary-color;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid $input-border;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &--email,
    &--password {
      &:focus {
        border-color: $input-focus;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
      }
    }

    &--email {
      margin-top: 1rem;
    }
  }

  &__button {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: white;
    background-color: $primary-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: $primary-hover;
    }
  }
  &__error {
    color: #f44336;
    font-size: 0.9rem;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>