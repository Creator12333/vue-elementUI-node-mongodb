<template>
    <div>
        <el-table :data="articles">
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="id" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="140">
        </el-table-column>
        <el-table-column prop="finalTime" label="截至时间" width="200">
        </el-table-column>
        <el-table-column prop="money" label="价钱" width="100">
        </el-table-column>
        <el-table-column prop="isEnd" label="是否刷完" width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>
<script>
  export default {
    data() {

      return {
        articles:[]
      }
    },
    methods: {
      fetch(){
        this.$http.get('articles').then(res => {
          console.log(res);
          this.articles = res.data;
        })
      },
      edit(id){
        this.$router.push(`/articles/edit/${id}`)
        console.log("edit",id);
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(res => {
          this.$message({
              message:"删除成功",
              type:"success"
          });
          console.log(res);
          this.fetch();
        })
        console.log("remove",id);
      }
    },
    created () {
      this.fetch();
    }
  };
</script>