<template>
  <div>
    <component v-if="dynamicComponent" :is="dynamicComponent"/>
    <div v-else>
      未找到组件
    </div>
  </div>
</template>

<script>
    import ApiComponent from "../components/detail/ApiComponent";
    import DataComponent from "../components/detail/DataComponent";
    import LayoutComponent from "../components/detail/LayoutComponent";
    import PageComponent from "../components/detail/PageComponent"
    import ProjectComponent from "../components/detail/ProjectComponent"
    import UiComponent from "../components/detail/UiComponent";

    const components = {
        ApiComponent,
        DataComponent,
        LayoutComponent,
        PageComponent,
        ProjectComponent,
        UiComponent
    };
    export default {
        name: "Detail",
        components,
        data() {
            const load=this.$route.query.load;
            const type=this.$route.query.type;

            let dynamicComponent=null;
            if (type) {
                const componentKey = type.substring(0,1).toUpperCase()+type.substring(1)+'Component';
                if (components[componentKey]) {
                    dynamicComponent=componentKey;
                }
            }
            return {
                dynamicComponent
            }
        }
    }
</script>

<style scoped>

</style>
