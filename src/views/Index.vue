<template>
  <FullScreen align="center">
    <Row class="search-bar">
      <Col class="title">Component Package Manager</Col>
    </Row>
    <Row>
      <Col class="input">
        <Input
          prefix-icon="el-icon-search"
          suffix-icon="el-icon-success"
          v-model="innerQuery"
          placeholder="请输入组件名或本地地址"
          @keyup.enter.native="doSearch" />
      </Col>
    </Row>
    <Row>
      <Col>
        <p class="version">version: 1.0.0</p>
      </Col>
    </Row>
  </FullScreen>
</template>

<script>
    import {Upload, Button, Input} from 'element-ui'
    import Row from "../components/commons/Row";
    import Col from "../components/commons/Col";
    import FullScreen from "../components/commons/FullScreen";
    import {mapActions} from "vuex";

    export default {
        name: 'index',
        props: {
            query: {
                type: String,
                default: ''
            }
        },
        components: {
            Upload,
            Input,
            Button,
            Row,
            Col,
            FullScreen
        },
        data() {
            return {
                innerQuery: this.query
            }
        },
        methods: {
            ...mapActions({
                search: 'list/search'
            }),
            doSearch() {
                this.search({
                    keyword: this.innerQuery
                });
                this.$router.push({
                    path: '/search',
                    query: {
                        keyword: this.innerQuery
                    }
                });
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "~element-ui/lib/theme-chalk/index.css";
  .search-bar {
    margin: 20px;
    & .title {
      text-align: center;
      font-size: 28px;
      color: #666666;
    }
  }
  .input {
    margin: 0 20px;
  }
  .version {
    color: blueviolet;
  }

</style>
