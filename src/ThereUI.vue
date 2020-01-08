<template>
  <div class="board">
    <Tree :data="treeData"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false">
      <span slot-scope="{ node, data }">
        <span v-if="data.key" style="margin-right: 4px;">{{ data.key }}:</span>
        <input v-if="data.value && data.type!=='label'" :value="data.value" />
        <span v-if="data.value && data.type==='label'">{{data.value}}</span>
      </span>
    </Tree>
    <Collapse>
      <CollapseItem title="getters query">
        <span>获得查询参数</span>
      </CollapseItem>
      <CollapseItem title="getters list">
        <span>获得查询结果</span>
      </CollapseItem>
      <CollapseItem title="mutations setData">
        <span>写入结果</span>
        <Table :data="[{name:'query',type:'object',description:'查询参数'}, {name:'list',type:'array',description:'查询结果'}, {name:'more',type:'string',description:'下一页令牌'}]"
               style="width: 100%">
          <TableColumn prop="name" label="名称"/>
          <TableColumn prop="type" label="类型"/>
          <TableColumn prop="description" label="说明"/>
        </Table>
      </CollapseItem>
    </Collapse>
    <div class="action">
      <Tabs type="card" style="margin-top: 20px">
        <TabPane label="Action" class="tab">
          <Row class="event" align="leftCenter">
            <Button class="submit" type="primary" size="mini">提交</Button>
            <span>事件</span>:
            <Select>
              <Option label="query"/>
              <Option label="setData"/>
              <Option label="list"/>
            </Select>
          </Row>
          <Table class="params"
                 :data="[{name:'query',type:'object',description:'查询参数'}, {name:'list',type:'array',description:'查询结果'}, {name:'more',type:'string',description:'下一页令牌'}]">
            <TableColumn prop="name" label="参数名"/>
            <TableColumn label="参数值">
              <Input class="input"
                     slot-scope="scope"
                     :placeholder="scope.row.description"
                     :value="scope.row.value"/>
            </TableColumn>
            <TableColumn label="操作">
              <Row class="itemAction">
                <i class="el-icon-minus"/>
                <i class="el-icon-plus"/>
              </Row>
            </TableColumn>
          </Table>
        </TabPane>
        <TabPane label="Console" class="tab console">
          <Col>
            <Row>
              <span>request: http://www.baidu.com</span>
            </Row>
            <Row>
              <span>params: {query:{keyword:'aomeiyun'}}</span>
            </Row>
            <Row>
              <span>response: {list:[{name:'aomeiyun',version:'1.0.0'}]}</span>
            </Row>
          </Col>
        </TabPane>
      </Tabs>
    </div>
    <Collapse>
      <CollapseItem title="searchComponent">
        <div>查询组件</div>
        <a href="">http://106.75.31.59:9999/service/rest/v1/search</a>
        <Table :data="[{name:'query',type:'object',description:'查询关键字'}, {name:'nextToken',type:'string',description:'下一页令牌'}]"
               style="width: 100%">
          <TableColumn prop="name" label="名称"/>
          <TableColumn prop="type" label="类型"/>
          <TableColumn prop="description" label="说明"/>
        </Table>
      </CollapseItem>
    </Collapse>
    <Collapse>
      <CollapseItem title="/home">
      </CollapseItem>
      <CollapseItem title="/search">
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
  import Row from "./components/commons/Row";
  import Col from "./components/commons/Col";
  import {
      Tree,
      Table, TableColumn,
      Collapse, CollapseItem,
      Tabs, TabPane,
      Select, Option,
      Button
  } from "element-ui"
    export default {
        name: "TreeDemo",
        components: {
            Row, Col,
            Tree, Table, TableColumn, Collapse, CollapseItem, Tabs, TabPane, Button
        },
        data() {
            return {
                treeData: [{
                    key:'数据源',
                    children:[{
                        key: 'input',
                        children: [{
                            key: 'props',
                            children: [{
                                key:'keyword',
                                value:'aomeiyun',
                                type: 'label'
                            }]
                        }, {
                            key:'state',
                            children: [{
                                value: 'list/query',
                                type: 'label'
                            },{
                                value: 'list/list',
                                type: 'label'
                            }]
                        }]
                    }, {
                        key:'output',
                        children: [{
                            value:'list/search',
                            type: 'label'
                        },{
                            value:'list/more',
                            type: 'label'
                        }]
                    }]
                }, {
                    key: '结构',
                    children: [{
                        key: 'parent',
                        children: [{
                            value: 'aomeiyun@1.0.0',
                            type: 'label'
                        }]
                    },{
                        key:'component',
                        children: [{
                            key: 'page',
                            children: [{
                                value:'router@1.0.0',
                                type:'label'
                            }]
                        },{
                            key: 'ui',
                            children:[{
                                value:'login@1.0.0',
                                type:'label'
                            }]
                        }]
                    },{
                        key:'privated',
                        children: [{
                            key:'data',
                            children: [{
                                value:'src/store',
                                type:'label'
                            }]
                        },{
                            key: 'page',
                            children: [{
                                value:'src/router',
                                type:'label'
                            }]
                        },{
                            key: 'ui',
                            children:[{
                                value:'src/components/login',
                                type:'label'
                            }]
                        }]
                    },{
                        key:'others',
                        children:[{
                            value: 'element-ui@2.13.0',
                            type: 'label'
                        }]
                    }]
                },{
                    key: 'store',
                    children:[{
                        key: 'state',
                        children:[{
                            key:'query',
                            children:[{
                                key: 'keyword',
                                value:'""',
                                type: 'label'
                            },{
                                key: 'sort',
                                value:'asc',
                                type: 'label'
                            }]
                        },{
                            key: 'list',
                            value:'[]',
                            type: 'label'
                        },{
                            key: 'nextToken',
                            value: '""',
                            type: 'label'
                        }]
                    },{
                        key: 'getters',
                        children:[{
                            value:'query()',
                            type:'label'
                        },{
                            value:'list()',
                            type:'label'
                        }]
                    },{
                        key: 'mutations',
                        children:[{
                            value:'setData()',
                            type:'label'
                        }]
                    },{
                        key: 'actions',
                        children: [{
                            value:'search()',
                            type:'label'
                        },{
                            value:'more()',
                            type:'label'
                        }]
                    }]
                }]
            }
        }
    }
</script>

<style lang="less" scoped>
  @import "~element-ui/lib/theme-chalk/index.css";
.board>* {
  border: 1px #666666 dashed;
  border-radius: 4px;
  margin: 4px;
  padding: 2px;
}
.action {
  & .event {
    margin:0 10px 10px 10px;
    &>.submit {
      margin-right: 10px;
    }
  }
  & .tab {
    min-height: 80px;
    width: 100%;
    & .title>* {
      min-width: 100px;
      text-align: center;
    }
    & .params>* {
      & .itemAction>* {
        margin-right: 5px;
      }
      & .input {
        width: 100%;
      }
    }
    &.console {
      background-color: black;
      color: white;
      font-size: 10px;
      padding: 0 4px;
    }
  }
}
</style>
