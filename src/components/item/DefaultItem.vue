<template>
  <Row class="item">
    <Col>
      <Row class="main" align="leftCenter">
        <div class="type">{{item.type}}</div>
        <div class="group">{{item.group}}</div>
        <div class="name">{{item.name}}</div>
        <div class="version">v{{item.version}}</div>
      </Row>
      <Row class="info">
        <template v-if="item.platform">
          <div class="platform" v-for="(tag, tagIndex) in item.platform"
               :key="tagIndex">{{tag}}</div>
        </template>
      </Row>
      <Row class="feature">
        <template v-if="item.tag && item.tag['项目']">
          <div class="tag" v-for="(tag, tagIndex) in item.tag['项目']"
               :key="tagIndex">{{tag}}</div>
        </template>
      </Row>
    </Col>
    <i class="el-icon-arrow-right" @click="doLoad"/>
  </Row>
</template>

<script>
    import {MessageBox} from 'element-ui'
    import Row from "../commons/Row";
    import Col from "../commons/Col";
    import Separator from "../commons/Separator";

    export default {
        name: "DefaultItem",
        props:["item"],
        components: {
            Row,
            Col,
            Separator
        },
        methods: {
            doLoad() {
                const self=this;
                if (!this.item.type) {
                    return;
                }
                MessageBox.confirm('此组件未安装, 是否下载?', '', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    type: 'warning'
                }).then(() => {
                    MessageBox({
                        type: 'success',
                        message: '正在安装中请稍等……',
                        showCancelButton: false,
                        showConfirmButton: false,
                        closeOnClickModal: false,
                        closeOnPressEscape: false
                    });
                    setTimeout(function () {
                        MessageBox.close();
                        // todo 下载安装完成后得到的服务器本地路径
                        const load=`${process.cwd()}/packages/${self.item.name}`;
                        self.$router.push({
                            path: `/component`,
                            query: {
                                load,
                                type: self.item.type
                            }
                        })
                    }, 2000);
                }).catch(() => {

                });
            }
        }
    }
</script>

<style lang="less" scoped>
  .item {
    min-height: 84px;
    border-bottom: solid 1px #2B78E4;
    margin: 0px 10px;
    padding: 4px 0;
    justify-content: space-between;
    align-items: center;
    & .main {
      font-size: 18px;
      color: black;
      margin-bottom: 2px;
      & .type {
        font-size: 12px;
        background-color: #FF6600;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        margin-right: 4px;
      }
      & .group {
        margin-right: 4px;
      }
      & .name {
        margin-right: 4px;
      }
      & .version {
        margin-right: 4px;
      }
    }

    & .info {
      margin-bottom: 5px;
      & .platform {
        font-size: 12px;
        color: #666666;
        margin-right: 4px;
      }
    }
    & .feature {
      & .tag {
        font-size: 12px;
        background-color: #2B78E4;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        margin-right: 4px;
      }
      & .tag:last-child {
        margin-right: 0;
      }
    }

  }
</style>
