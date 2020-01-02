<template>
  <FullScreen align="topCenter">
    <Row class="search-bar" align="center">
      <Col>CPM</Col>
      <Col class="input">
        <Input
          prefix-icon="el-icon-search"
          suffix-icon="el-icon-success"
          v-model="innerQuery"
          placeholder="请输入组件名或本地地址"
          @keyup.enter.native="doSearch" />
      </Col>
    </Row>
    <Separator color="#2B78E4"/>
    <DefaultItem v-for="(item, index) in list.slice(0,3)"
      :key="index" :item="item"/>
    <DefaultItem :item="{name:'界面组件范例',version:'1.2.0',tag:{'项目':['项目A','项目B']},type:'ui',platform:['web','h5']}"/>
    <DefaultItem :item="{name:'数据组件范例',version:'1.2.1',tag:{'项目':['项目C','项目D']},type:'data',platform:['web','h5']}"/>
    <DefaultItem :item="{name:'接口组件范例',version:'1.2.2',tag:{'项目':['项目C','项目D']},type:'api',platform:['web','h5']}"/>
    <DefaultItem :item="{name:'布局组件范例',version:'1.2.3',tag:{'项目':['项目A','项目B']},type:'layout',platform:['web','h5']}"/>
    <DefaultItem :item="{name:'路由组件范例',version:'1.2.3',tag:{'项目':['项目A','项目B']},type:'page',platform:['web','h5']}"/>
    <DefaultItem :item="{name:'项目组件范例',version:'1.2.3',tag:{'项目':['项目A','项目B']},type:'project',platform:['web','h5']}"/>
  </FullScreen>
</template>

<script>
    import {Upload, Button, Input} from 'element-ui'
    import Row from "../components/commons/Row";
    import Col from "../components/commons/Col";
    import Separator from "../components/commons/Separator";
    import FullScreen from "../components/commons/FullScreen";

    import DefaultItem from "../components/item/DefaultItem";

    import {mapGetters, mapActions} from "vuex";

    export default {
        name: 'search',
        props: {
            keyword: {
                type: String,
                default: ''
            }
        },
        components: {
            Separator,
            Upload,
            Input,
            Button,
            Row,
            Col,
            DefaultItem,
            FullScreen
        },
        data() {
            let innerQuery=(this.query && this.query.keyword) || (this.$route.query && this.$route.query.keyword) || '';
            return {
                innerQuery
            }
        },
        computed: {
            ...mapGetters({
                query: "list/query",
                list: "list/list"
            })
        },
        methods: {
            ...mapActions({
                search: 'list/search',
                more: 'list/more'
            }),
            doSearch() {
                this.search({
                    keyword: this.innerQuery
                });
                console.log(this.innerQuery);
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "~element-ui/lib/theme-chalk/index.css";
  .search-bar {
    width: 100%;
    & .input {
      margin: 20px 10px;
    }
  }


</style>
