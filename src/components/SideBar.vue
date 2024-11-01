<template>
  <div class="side-bar">
    <div class="side-bar-photo-and-name">
      <img src="@/assets/avatar.png" alt="Profile Avatar" class="avatar" />

      <h1>林婕安</h1>
      <p class="side-bar-photo-and-name-english-name">Jayne Lin</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 20rem;
  padding: 6rem 1.25rem; 

  background-color: #e2e1e0; 

  &-photo-and-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 0.5rem;

    img {
      border-radius: 50%;
      width: 9rem;
      border: 0.25rem solid #fff;
    }

    h1 {
      margin: 0.5rem 0rem 0rem 0rem;
    }

    &-english-name {
      margin: 0rem;
      font-size: 0.75rem;
    }
  }


}
</style>

