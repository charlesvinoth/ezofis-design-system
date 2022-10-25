<template>
  <div class="relative-position">
    <div class="mark shadow-1 bg-primary">
      <img src="@/assets/logo/logo-4.png" height="20" class="q-ml-md" />
    </div>

    <div class="tail text-primary"></div>
  </div>
</template>

<script>
export default {
  name: "Mark",
};
</script>

<style lang="scss" scoped>
.mark {
  border-radius: 0px 50px 50px 0px;
  height: 40px;
  width: 56px;
  display: flex;
  align-items: center;
}

.tail::before {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: -50px;
  height: 50px;
  width: 12.5px;
  border-top-left-radius: 25px;
  box-shadow: 0 -12.5px 0 0 currentColor;
}
</style>
