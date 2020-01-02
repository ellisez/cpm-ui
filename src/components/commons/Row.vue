<template>
    <div :class="rowClass">
      <slot/>
    </div>
</template>

<script>
    export default {
        name: "Row",
        props: {
            align: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                rowClass: 'row '+this.align
            }
        }
    }
</script>

<style lang="less" scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  &.leftTop {
    justify-content: flex-start;
    align-items: flex-start;
  }
  &.leftCenter {
    justify-content: flex-start;
    align-items: center;
  }
  &.leftBottom {
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.centerTop {
    justify-content: center;
    align-items: flex-start;
  }
  &.center {
    justify-content: center;
    align-items: center;
  }
  &.centerBottom {
    justify-content: center;
    align-items: flex-end;
  }
  &.rightTop {
    justify-content: flex-end;
    align-items: flex-start;
  }
  &.rightCenter {
    justify-content: flex-end;
    align-items: center;
  }
  &.rightBottom {
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
