<!--
 * @Date: 2022-06-09 11:23:19
 * @LastEditors: shen-xu
 * @LastEditTime: 2022-06-17 10:43:56
 * @Description: 
-->
<template>
  <!-- 首页的待办 -->
  <el-card class="box-card">
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/backlog' }"
          >首页待办</el-breadcrumb-item
        >
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left-container">
      <el-row class="seach" :gutter="20">
        <el-col :span="8">
          <el-input v-model="keyWord" placeholder="请输入内容">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="dialogFormVisible = true"
            >添加待办</el-button
          >
        </el-col>
      </el-row>
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-table :data="slist" style="width: 100%">
        <el-table-column
          prop="task_create_time"
          label="日期"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column prop="task_holder" label="姓名" sortable width="180">
        </el-table-column>
        <el-table-column prop="task_content" label="待办任务" width="700">
        </el-table-column>
        <el-table-column width="120" label="状态"
          ><el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column width="120" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            ></template
          >
        </el-table-column>
      </el-table>
      <el-dialog title="待办事项" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="具体待办" :label-width="formLabelWidth">
            <el-input v-model="form.desc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <el-pagination
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import { reqgetList, reqDelBacklog, reqSearchBacklog } from "../../api/user";
export default {
  data() {
    return {
      value2: "",
      formLabelWidth: "120px",
      form: {
        name: "",
        sesc: ""
      },
      keyWord: "",
      value: true,
      dialogFormVisible: false,
      slist: [],
      task_holder: "",
      task_content: "",
      task_create_time: "",
      date: []
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    /* 获取首页待办列表 */
    async getList() {
      const { data: res } = await reqgetList();
      this.slist = res.data;
      console.log(res);
    },
    /* 首页删除功能 */
    async handleDelete(index, row) {
      var res = await this.$confirm(
        "此操作将永久删除该待办, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => {
        return err;
      });
      if (res != "confirm") return this.$message.info("删除用户已取消");
      reqDelBacklog(row.id);
      this.getList();
    },
    async searchList() {
      if (this.keyWord.trim() == "") {
        return alert("不能为空");
      }
      const [beginPubdate, endPubdate] = this.date || [];

      console.log(beginPubdate, endPubdate);
      await reqSearchBacklog(this.keyWord, beginPubdate, endPubdate);
      this.getList();
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped lang="less">
.box-card {
  width: 100%;
  height: 100%;
  position: relative;
  .seach {
    margin: 10px;
  }
}
</style>
