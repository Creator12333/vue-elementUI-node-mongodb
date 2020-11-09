<template>
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="article.name"></el-input>
  </el-form-item>
  <el-form-item label="学号">
    <el-input type="textarea" v-model="article.id"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="textarea" v-model="article.password"></el-input>
  </el-form-item>
  <el-form-item label="截至时间">
    <el-input type="textarea" v-model="article.finalTime"></el-input>
  </el-form-item>
  <el-form-item label="价钱">
    <el-input type="textarea" v-model="article.money"></el-input>
  </el-form-item>
  <el-form-item label="是否刷完">
    <el-input type="textarea" v-model="article.isEnd"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        article: {
            name:'',
            id:'',
            password:'',
            finalTime:'',
            money:'',
            isEnd:''
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res => {
          console.log(res);
          this.$message({
            message:"修改成功",
            type:"success"
          });
          this.$router.push('/articles/index'); 
        })
        console.log(this.article);
      }
    },
    created () {
        this.$http.get(`articles/${this.$route.params.id}`).then(res => {
            this.article = res.data
        })
    }
  }
</script>