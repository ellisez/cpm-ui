<template>
  <div :class="classArray" :style="style">
    <slot/>
  </div>
</template>

<script>
    export default {
        name: "separator",
        props: {
            direction: {
                type: String,
                default: 'row'
            },
            width: {
                type: Number,
                default: 1
            },
            color: {
                type: String,
                default: 'black'
            }
        },
        data() {
            let style={};
            let classArray=['separator'];
            style['background-color']=this.color;
            if (this.direction==='row') {
                classArray.push('hor');
                style['height']=this.width+'px';
            } else {
                classArray.push('ver');
                style['width']=this.width+'px';
            }
            return {
                classArray,
                style
            }
        }
    }
</script>

<style lang="less" scoped>
.separator {
  background-color: black;
  .ver {
    width: 1px;
    height: 100%;
  }

  .hor {
    width: 100%;
    height: 1px;
  }

}
</style>
