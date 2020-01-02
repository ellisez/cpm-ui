<template>
<div class="screen">
    <div :class="containerClass">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
    name: "FullScreen",
    props: {
        align: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            containerClass: 'container '+this.align
        }
    }
}
</script>

<style lang="less" scoped>
.screen {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &>.container {
    position: relative;
    width: 100%;
    height: 100%;
    &.center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &.leftCenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    &.rightCenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
    &.leftTop {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    &.centerTop {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    &.rightTop {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    }
    &.leftBottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
    }
    &.centerBottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
    &.rightBottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
