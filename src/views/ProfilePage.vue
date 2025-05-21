<template>
  <div class="wrapper">
    <CurrentUser :user="user" />
    <ProfileForm :user="user" @update="updateUserData" />
  </div>
</template>

<script setup>
import CurrentUser from "../components/Profile/CurrentUser.vue";
import ProfileForm from "../components/Profile/ProfileForm.vue";
import { ref } from "vue";

let user = ref({
  firstName: "James",
  lastName: "Sullivan",
  about:
    "James Sullivan is a renowned scarer at Monsters, Inc. where he works alongside his partner and best friend Mike Wazowski. Sulley's world gets turned upside down when he becomes the accidental guardian of a human child. In working to return Boo to the human world, Sulley manages to uncover a company conspiracy while also solving an energy crisis that plagued the city of Monstropolis.",
  email: "sulley@monstersinc.com",
  image: "/src/assets/profile/sully.webp",
});

const updateUserData = (data) => {
  user.value = data;
};
</script>

<style scoped>

.card {
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  .card {
    margin-bottom: 0;
    width: 50%;
  }
}

.card {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(17, 24, 39, 0.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 0.375rem;
  padding: 3rem;
  background-color: #1a2438;
}

.card .container {
  display: block;
}

@media (min-width: 768px) {
  .card .container {
    display: block;
  }
}

@media (min-width: 1024px) {
  .card .container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
}

.card .container {
  border-bottom: 1px solid rgba(17, 24, 39, 0.1);
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .card .container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card .container .title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: rgb(17, 24, 39);
}

.card .container .description {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: rgb(75, 85, 99);
  margin-bottom: 1.25rem;
}

.card .content {
  display: grid;
  max-width: 42rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 2rem;
}

@media (min-width: 640px) {
  .card .content {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .card .content {
    grid-column: span 2 / span 2;
  }
}

.card .content .label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: rgb(17, 24, 39);
}

.card .content .input {
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 0;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  color: rgb(17, 24, 39);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) inset;
}

.card .content .input::placeholder {
  color: rgb(156, 163, 175);
}

.card .content .input:focus {
  box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.6) inset;
}

.card .content .input {
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.card .content .hint {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: rgb(75, 85, 99);
}

.card .buttons {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.5rem;
}

.card .buttons .primary {
  border-radius: 0.375rem;
  background-color: rgb(13, 148, 136);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.card .buttons .primary:hover {
  background-color: rgb(20, 184, 166);
}

.card .buttons .primary:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  outline: 2px solid rgb(13, 148, 136);
}

.card .buttons .muted {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: rgb(17, 24, 39);
}

.card .image-wrapper {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
}

.card .image-wrapper .image {
  border-radius: 9999px;
  border: 4px solid rgb(148, 163, 184);
  padding: 0.25rem;
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
}

.wrapper {
  gap: 1.25rem;
  padding: 1.25rem;
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
  }
}

</style>