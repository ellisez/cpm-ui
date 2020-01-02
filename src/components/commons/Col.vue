<template>
    <div :class="colClass">
      <slot/>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: {
            align: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                colClass: 'col '+this.align
            }
        }
    }
</script>

<style lang="less" scoped>
.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &.leftTop {
    justify-content: flex-start;
    align-items: flex-start;
  }
  &.leftCenter {
    justify-content: center;
    align-items: flex-start;
  }
  &.leftBottom {
    justify-content: flex-end;
    align-items: flex-start;
  }
  &.centerTop {
    justify-content: flex-start;
    align-items: center;
  }
  &.center {
    justify-content: center;
    align-items: center;
  }
  &.centerBottom {
    justify-content: flex-end;
    align-items: center;
  }
  &.rightTop {
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.rightCenter {
    justify-content: center;
    align-items: flex-end;
  }
  &.rightBottom {
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
